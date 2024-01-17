const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("../config");
const { CustomError } = require("../utils/error");
const { Flag } = require("../utils/flag");
const { IS_DEV } = require("../config/server");

const modelsBootstrap = [
  require("./Book"),
  require("./Policy"),
  require("./Role-Policy"),
  require("./Role"),
  require("./User-Book"),
  require("./User"),
];
// TODO - bear the logic of sequalize
const dbFlag = new Flag();
const dbContext = {};

const getDbInstance = () => {
  if (!dbFlag.isActive) {
    throw new CustomError("db instance not initialize");
  }

  return dbContext.dbInstance;
};

const getDbModels = () => {
  return getDbInstance().models;
};

const getDbModelByName = (modelName) => {
  const models = getDbModels();

  if (!models.getOwnProperty(modelName)) {
    throw new CustomError(`model with name: "${modelName}" not found`).setStatus(404);
  }

  return models[modelName];
};

const authenticate = async (sequelizeInstance) => {
  try {
    sequelizeInstance.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (e) {
    new CustomError(
      `Unable to connect to the database: ${db.database}`
    ).setCause(e);
  }
};

const synchronization = async (sequelizeInstance) => {
  try {
    sequelizeInstance.sync({ alter: true });
    console.log("Database synchronization has been successfully.");
  } catch (e) {
    new CustomError(`database synchronization error`).setCause(e);
  }
};

const initLinks = (links, sequelize) => {
  links.forEach((model) => {
    model.link(sequelize);
  });
};

const initModels = (modelsBootstrap, sequelize) => {
  const links = [];

  modelsBootstrap.forEach(({ init }) => {
    const model = init(sequelize, DataTypes);

    if (!model.hasOwnProperty("link")) return;

    links.push(model);
  });

  initLinks(links, sequelize);
};

const createSequelizeInstance = () => {
  const sequelizeInstance = new Sequelize(
    db.database,
    db.username,
    db.password,
    {
      host: db.host,
      port: db.port,
      dialect: db.dialect,
      logging: IS_DEV,
      pool: {
        min: 0,
        max: 10,
      },
      define: {
        underscored: false,
        freezeTableName: false,
        syncOnAssociation: true,
        charset: "utf8",
        timestamps: false,
      },
    }
  );

  return sequelizeInstance;
};

const createInstance = async () => {
  if (dbFlag.isActive) {
    throw new CustomError("re-creating the database instance");
  }

  const sequelizeInstance = createSequelizeInstance();

  initModels(modelsBootstrap, sequelizeInstance);

  await authenticate(sequelizeInstance);
  await synchronization(sequelizeInstance);

  dbContext.dbInstance = sequelizeInstance;

  dbFlag.on();
};

module.exports = {
  createInstance,
  getDbInstance,
  getDbModels,
  getDbModelByName,
};
