const { app } = require('./app');
const { logger } = require('./utils/logger/');
let server;

exports.startServer = () => {
  return new Promise((resolve) => {
    server = app.listen(app.get('port'), () => {
      logger.info(`The server started listening on port: ${app.get('port')}`);
      resolve();
    });
  });
};

exports.stopServer = () => {
  if (!server) logger.info(`The server has not been started`);

  server.close(() => {
    logger.info(`Server stopped`);
    process.exit(1);
  });
};
