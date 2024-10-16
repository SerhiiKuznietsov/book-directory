const { fastify } = require('./app');
const { logger } = require('./utils/logger');
const { server: { port } } = require('./config')

let server;

exports.startServer = () => {
  return new Promise((resolve) => {
    server = fastify.listen({ port }, (err) => {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }

      resolve();
    });
  });
};

exports.stopServer = () => {
  return new Promise((resolve) => {
    if (!server) {
      logger.info(`The server has not been started`);
      return resolve();
    }

    server?.close(() => {
      logger.info(`Server stopped`);
      resolve();
    });
  });
};
