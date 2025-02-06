const { start, stop } = require('./src');

(async () => {
  await start();
})();

process
  .on('SIGTERM', async () => {
    logger.info('Received SIGTERM. Shutting down gracefully.');

    await stop();
  })
  .on('SIGINT', async () => {
    logger.info('Received SIGINT. Shutting down gracefully.');

    await stop();
  })
  .on('uncaughtException', async (err) => {
    logger.fatal(err, 'Uncaught exception detected');

    await stop();

    process.exit(1);
  });
