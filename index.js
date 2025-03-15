const { App } = require('./src/app');
const { FastifyServer } = require('./src/server');
const { logger } = require('./src/utils/logger');
const serverConfig = require('./src/config/server');

const server = new FastifyServer(serverConfig, logger);
const app = new App(server, logger);

(async () => {
  await app.start();
})();

process
  .on('SIGTERM', async () => {
    logger.info('Received SIGTERM. Shutting down gracefully.');

    await app.stop();
    process.exit(0);
  })
  .on('SIGINT', async () => {
    logger.info('Received SIGINT. Shutting down gracefully.');

    await app.stop();
    process.exit(0);
  })
  .on('uncaughtException', async (err) => {
    logger.fatal(err, 'Uncaught exception detected');

    await app.stop();
    process.exit(1);
  })
  .on('unhandledRejection', async (reason, promise) => {
    logger.fatal({ reason, promise }, 'Unhandled rejection detected');

    await app.stop();
    process.exit(1);
  });
