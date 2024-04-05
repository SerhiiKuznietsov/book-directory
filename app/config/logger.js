const { LOG_LEVEL_INFO } = require('../constants/logger');

module.exports = {
  level: process.env.LOG_LEVEL || LOG_LEVEL_INFO,
};

validLoggerConfig(module.exports);
