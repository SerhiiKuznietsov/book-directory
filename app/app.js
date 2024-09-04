const fastifyConstructor = require('fastify');
const fastifyCookie = require('fastify-cookie');
const { rootErrorHandlers } = require('./middlewares/rootErrorHandler');
const { rootRouter } = require('./routers');
const { logger } = require('./utils/logger');

const fastify = fastifyConstructor({ logger });

fastify.register(fastifyCookie);
fastify.register(rootRouter);
fastify.setErrorHandler(rootErrorHandlers);

module.exports = {
  fastify,
};
