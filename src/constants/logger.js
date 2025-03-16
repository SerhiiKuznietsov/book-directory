const path = require('node:path');

const LEVEL_TRACE = 'trace';
const LEVEL_DEBUG = 'debug';
const LEVEL_INFO = 'info';
const LEVEL_WARN = 'warn';
const LEVEL_ERROR = 'error';
const LEVEL_FATAL = 'fatal';
const FOLDER_PATH = path.resolve('logs');
const FILE_PATH = path.join(FOLDER_PATH, `app.log`);
const LEVELS_LIST = [
  LEVEL_FATAL,
  LEVEL_ERROR,
  LEVEL_WARN,
  LEVEL_INFO,
  LEVEL_DEBUG,
  LEVEL_TRACE,
];

module.exports = {
  FILE_PATH,
  FOLDER_PATH,
  LEVELS_LIST,
  LEVEL_FATAL,
  LEVEL_ERROR,
  LEVEL_WARN,
  LEVEL_INFO,
  LEVEL_DEBUG,
  LEVEL_TRACE,
};
