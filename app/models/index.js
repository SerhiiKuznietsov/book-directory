const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs/promises");
const path = require("path");
const { db } = require("../config");
const { CustomError } = require("../utils/error");
const { Flag } = require("../utils/flag");
const { IS_DEV } = require("../config/server");

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

const authenticate = async (instance) => {
  try {
    instance.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (e) {
    new CustomError(
      `Unable to connect to the database: ${db.database}`
    ).setCause(e);
  }
};

const synchronization = async (instance) => {
  try {
    instance.sync({ force: true });
    console.log("Database synchronization has been successfully.");
  } catch (e) {
    new CustomError(`database synchronization error`).setCause(e);
  }
};

const getModelsBootstrapFunctions = async (modelsDir) => {
  const modelsFiles = await fs.readdir(modelsDir);
  const selfFileName = path.basename(__filename);
  const result = [];

  for (let i = modelsFiles.length - 1; i >= 0; --i) {
    const fileName = modelsFiles[i];

    if (fileName === selfFileName) continue;

    const modelFilepath = path.join(__dirname, fileName);

    const fileContent = require(modelFilepath);

    if (!fileContent) {
      throw new CustomError(`model file on path ${modelFilepath} empty`);
    }

    result.push(fileContent.init);
  }

  return result;
};

const initLinks = () => {};

const initModels = (modelsBootstrap, sequelize) => {
  const links = [];

  modelsBootstrap.forEach((init) => {
    const model = init(sequelize, DataTypes);

    if (!model.hasOwnProperty('link')) return;

    links.push(model);
  });

  initLinks(links);
};

const createSequelizeInstance = () => {
  const sequelize = new Sequelize(db.database, db.username, db.password, {
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
      timestamps: true,
      createdAt: "created_at",
      deletedAt: "deleted_at",
      updatedAt: "updated_at",
    },
  });

  return sequelize;
};

const createInstance = async () => {
  if (dbFlag.isActive) {
    throw new CustomError("re-creating the database instance");
  }

  const sequelize = createSequelizeInstance();
  const modelsBootstrap = await getModelsBootstrapFunctions(__dirname);

  initModels(modelsBootstrap, sequelize);

  await authenticate(sequelize);
  await synchronization(sequelize);

  dbContext.dbInstance = sequelize;

  dbFlag.on();
};

module.exports = {
  createInstance,
  getDbInstance,
  getDbModels,
};
