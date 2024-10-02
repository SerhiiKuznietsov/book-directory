const { startServer, stopServer } = require('./server');
const { logger } = require('./utils/logger');
const { initStorages, closeStorages } = require('./services/storage');

exports.start = async () => {
  try {
    await initStorages();
    await startServer();

    logger.info('App started...');
  } catch (e) {
    console.error(e);
    throw e;
  }
};

exports.stop = async () => {
  await closeStorages();
  await stopServer();

  logger.info('App stopped...');
};
