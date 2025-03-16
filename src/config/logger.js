require('dotenv').config();

const { LEVEL_INFO } = require('../constants/logger');
const { validLoggerConfig } = require('./_validations/logger');

module.exports = {
  level: process.env.LOG_LEVEL || LEVEL_INFO,
};

validLoggerConfig(module.exports);
