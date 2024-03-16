const { CustomError } = require("../../utils/error");
const { Flag } = require("../../utils/flag");
const {
  authenticate,
  createSequelizeInstance,
} = require("./sequelize-instance");
const { initModels } = require("./sequelize-models");

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

const createInstance = async () => {
  if (dbFlag.isActive) {
    throw new CustomError("re-creating the database instance");
  }

  const sequelizeInstance = createSequelizeInstance();

  initModels(sequelizeInstance);

  await authenticate(sequelizeInstance);

  dbContext.dbInstance = sequelizeInstance;

  dbFlag.on();
};

module.exports = {
  createInstance,
  getDbInstance,
  getDbModels,
};
