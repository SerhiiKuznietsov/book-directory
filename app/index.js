const { startServer, stopServer } = require('./server');
const { logger } = require('./utils/logger');
// const { initStoragesConnection } = require("./services/storage");

exports.start = async () => {
  // TODO - remove the comment when the storage logic is needed
  // await initStoragesConnection();
  await startServer();
};

process
  .on('SIGINT', async () => {
    logger.info('Received SIGINT. Shutting down gracefully.');
    stopServer();
  })
  .on('uncaughtException', async (err) => {
    logger.fatal(err, 'Uncaught exception detected');

    stopServer();

    setTimeout(() => {
      process.abort();
    }, 1000 * 3).unref();

    process.exit(1);
  });
