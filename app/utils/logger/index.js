const pino = require('pino');
const {
  logger: { level },
} = require('../../config');
// const { LOG_FILE_PATH, LOG_DIR_PATH } = require('../../constants/logger');
// const { createFolderSyncIfNotExsist } = require('./logger-file-util');
// const { IS_PROD } = require('../../config/server');

// TODO - add write to file for message logger

const targets = [
  {
    level,
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
];

// if (IS_PROD) {
//   createFolderSyncIfNotExsist(LOG_DIR_PATH);

//   targets.push({а
//     level: 'info',
//     target: 'pino/file',
//     options: { destination: LOG_FILE_PATH },
//   });
// }

const logger = pino(
  {
    redact: {
      paths: ['*.password', 'password'],
      censor: '[***]',
      remove: true,
    },
  },
  pino.transport({
    targets,
  })
);

module.exports = { logger };
