const { startServer, stopServer } = require('./server');
const { logger } = require('./utils/logger');
const { initAllCache, closeAllCache } = require('./services/cache');

exports.start = async () => {
  // await initAllCache();
  await startServer();

  logger.info('App started...');
};

exports.stop = async () => {
  await closeAllCache();
  await stopServer();

  logger.info('App stopped...');
};
