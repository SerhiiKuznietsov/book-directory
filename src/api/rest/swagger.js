const fastifySwagger = require('@fastify/swagger');
const fastifySwaggerUI = require('@fastify/swagger-ui');

const { BOOK_API_TAG } = require('../../constants/book');
const { ROLE_API_TAG } = require('../../constants/role');
const { USER_API_TAG } = require('../../constants/user');
const { AUTH_API_TAG } = require('../../constants/auth');

exports.registerSwagger = (app) => {
  app.register(fastifySwagger, {
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
        { name: AUTH_API_TAG, description: 'Auth related end-points' },
        { name: USER_API_TAG, description: 'User related end-points' },
        { name: ROLE_API_TAG, description: 'Role related end-points' },
        { name: BOOK_API_TAG, description: 'Book related end-points' },
      ],
    },
    exposeRoute: true,
  });

  app.register(fastifySwaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecificationClone: true,
  });
};
