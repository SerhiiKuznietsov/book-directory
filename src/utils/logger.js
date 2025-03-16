const pino = require('pino');
const { level } = require('../config/logger');
const { IS_DEV, IS_PROD } = require('../config/env');
const { FILE_PATH } = require('../constants/logger');

let transport;

if (IS_PROD) {
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
