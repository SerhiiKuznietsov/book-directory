const pino = require('pino');
const { level } = require('../../config/logger');
const { IS_DEV, IS_PROD } = require('../../config/env');
const { FILE_PATH, FOLDER_PATH } = require('../../constants/logger');
const { createFolderSyncIfNotExist } = require('./file-util');

let transport;

if (IS_PROD) {
  createFolderSyncIfNotExist(FOLDER_PATH);

  transport = pino.transport({
    target: 'pino/file',
    options: { destination: FILE_PATH },
  });
}

if (IS_DEV) {
  transport = pino.transport({
    target: 'pino-pretty',
    options: {
      levelFirst: false,
      colorize: true,
      translateTime: 'HH:MM:ss',
    },
  });
}

exports.logger = pino({ level }, transport);
