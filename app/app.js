const fastifyConstructor = require('fastify');
const fastifyCookie = require('fastify-cookie');
const fastifySwagger = require('@fastify/swagger');
const fastifySwaggerUI = require('@fastify/swagger-ui');
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

const registerSwagger = (fastify) => {
  fastify.register(fastifySwagger, {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'API Documentation',
        description: 'Testing the Fastify swagger API',
        version: '1.0.0',
      },
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'user', description: 'User related end-points' },
        { name: 'role', description: 'Role related end-points' },
        { name: 'book', description: 'Book related end-points' },
      ],
    },
    exposeRoute: true,
  });

  fastify.register(fastifySwaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });
};

registerSwagger(fastify);

fastify.register(fastifyCookie);
fastify.register(rootRouter);
fastify.setErrorHandler(rootErrorHandlers);

module.exports = {
  fastify,
};
