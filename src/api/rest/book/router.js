const controllers = require('./controllers');
const hooks = require('../common/hooks/book');
const schemas = require('./schemas');

module.exports = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: schemas.getListSchema,
    onRequest: [hooks.readCheckMiddleware],
    handler: controllers.getList,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: schemas.getSchema,
    onRequest: [hooks.readCheckMiddleware],
    handler: controllers.getSingle,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: schemas.createSchema,
    onRequest: [hooks.createCheckMiddleware],
    handler: controllers.create,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: schemas.updateSchema,
    onRequest: [hooks.updateCheckMiddleware],
    handler: controllers.update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: schemas.removeSchema,
    onRequest: [hooks.deleteCheckMiddleware],
    handler: controllers.remove,
  });
};
