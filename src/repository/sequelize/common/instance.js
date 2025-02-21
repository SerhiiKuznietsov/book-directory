const { Sequelize } = require('sequelize');
const {
  server: { IS_DEV },
} = require('../../../config');
const { logger } = require('../../../utils/logger');

exports.createSequelizeInstance = (config) => {
  const {
    database,
    schema,
    username,
    password,
    host,
    port,
    dialect,
    logMode,
    minPoolConnection,
    maxPoolConnection,
  } = config;

  const sequelizeInstance = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: dialect,
    schema,
    logging: IS_DEV && logMode && ((msg) => logger.info(msg)),
    pool: {
      min: minPoolConnection,
      max: maxPoolConnection,
    },
    define: {
      underscored: false,
      freezeTableName: false,
      syncOnAssociation: true,
      charset: 'utf8',
      timestamps: false,
    },
  });

  return sequelizeInstance;
};
