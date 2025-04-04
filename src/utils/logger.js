const pino = require('pino');
const { IS_DEV, IS_PROD } = require('../config/env');
const { FILE_PATH } = require('../constants/logger');

exports.newLogger = (level) => {
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

  return pino({ level }, transport);
};
