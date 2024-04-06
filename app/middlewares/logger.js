const expressLogger = require('pino-http');
const { logger } = require('../utils/logger/');
const { level } = require('../config/logger');

module.exports = expressLogger({
  logger,
  useLevel: level,
});
