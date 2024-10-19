const fastifyConstructor = require('fastify');
const fastifyCookie = require('@fastify/cookie');
const { randomUUID } = require('node:crypto');
const { logger } = require('../utils/logger');
const { initApi } = require('../api');
const { registerSwagger } = require('./swagger');
const ajv = require('./ajv');

const fastify = fastifyConstructor({
  loggerInstance: logger,
  ajv,
  genReqId: () => randomUUID(),
});

registerSwagger(fastify);
initApi(fastify);
fastify.register(fastifyCookie);

module.exports = {
  fastify,
};
