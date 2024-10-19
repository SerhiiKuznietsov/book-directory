const { Sequelize } = require('sequelize');
const {
  db: dbConfig,
  server: { IS_DEV },
} = require('../../../../config');
const { CustomError } = require('../../../../utils/error');
const { logger } = require('../../../../utils/logger');
const { ERROR_TYPES } = require('../../../../constants/error');

exports.authenticate = async (sequelizeInstance) => {
  try {
    await sequelizeInstance.authenticate();
    logger.info('Database connection has been established successfully.');
  } catch (e) {
    throw new CustomError(
      `Unable to connect to the database: ${sequelizeInstance.config.database}`, ERROR_TYPES.UNKNOWN_ERROR
    ).setCause(e);
  }
};

exports.createSequelizeInstance = () => {
  const sequelizeInstance = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      port: dbConfig.port,
      dialect: dbConfig.dialect,
      schema: 'public',
      logging: (IS_DEV && dbConfig.logMode) && ((msg) => logger.info(msg)),
      pool: {
        min: 0,
        max: 10,
      },
      define: {
        underscored: false,
        freezeTableName: false,
        syncOnAssociation: true,
        charset: 'utf8',
        timestamps: false,
      },
    }
  );

  return sequelizeInstance;
};
