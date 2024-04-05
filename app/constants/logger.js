const path = require('node:path');

const LOG_FILE_NAME = `app.log`;
const LOG_DIR_PATH = path.join(path.resolve('.'), 'logs');
const LOG_FILE_PATH = path.join(LOG_DIR_PATH, LOG_FILE_NAME);
const LOG_LEVEL_TRACE = 'trace';
const LOG_LEVEL_DEBUG = 'debug';
const LOG_LEVEL_INFO = 'info';
const LOG_LEVEL_WARN = 'warn';
const LOG_LEVEL_ERROR = 'error';
const LOG_LEVEL_FATAL = 'fatal';
const LOG_LEVELS_LIST = [
  LOG_LEVEL_FATAL,
  LOG_LEVEL_ERROR,
  LOG_LEVEL_WARN,
  LOG_LEVEL_INFO,
  LOG_LEVEL_DEBUG,
  LOG_LEVEL_TRACE,
];

module.exports = {
  LOG_FILE_NAME,
  LOG_FILE_PATH,
  LOG_DIR_PATH,
  LOG_LEVEL_TRACE,
  LOG_LEVEL_DEBUG,
  LOG_LEVEL_INFO,
  LOG_LEVEL_WARN,
  LOG_LEVEL_ERROR,
  LOG_LEVEL_FATAL,
  LOG_LEVELS_LIST,
};
