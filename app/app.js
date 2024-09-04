const fastifyConstructor = require('fastify');
const fastifyCookie = require('fastify-cookie');
const { rootErrorHandlers } = require('./middlewares/rootErrorHandler');
const { rootRouter } = require('./routers');
const { logger } = require('./utils/logger');

const ajv = {
  customOptions: {
    formats: {
      'uuid-v4':
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    },
  },
}; // TODO

const fastify = fastifyConstructor({
  logger,
  ajv,
});

fastify.register(fastifyCookie);
fastify.register(rootRouter);
fastify.setErrorHandler(rootErrorHandlers);

module.exports = {
  fastify,
};
