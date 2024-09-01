const { start, stop } = require('./app');

(async () => {
  await start();
})();

process
  .on('SIGINT', async () => {
    logger.info('Received SIGINT. Shutting down gracefully.');

    await stop();
  })
  .on('uncaughtException', async (err) => {
    logger.fatal(err, 'Uncaught exception detected');

    await stop();

    process.exit(1);
  });
