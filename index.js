const { App } = require('./src/app');
const { FastifyServer } = require('./src/server');
const { logger } = require('./src/utils/logger');
const { server: serverConfig } = require('./src/config');

const server = new FastifyServer(serverConfig.host, serverConfig.port, logger);
const app = new App(server, logger);

(async () => {
  await app.start();
})();

process
  .on('SIGTERM', async () => {
    logger.info('Received SIGTERM. Shutting down gracefully.');
    await app.stop();
  })
  .on('SIGINT', async () => {
    logger.info('Received SIGINT. Shutting down gracefully.');
    await app.stop();
  })
  .on('uncaughtException', async (err) => {
    logger.fatal(err, 'Uncaught exception detected');
    await app.stop();
  });
