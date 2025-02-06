const schemas = require('./schemas');

module.exports = async (fastify, { controllers }) => {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: schemas.getListSchema,
    handler: controllers.getList,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: schemas.getSchema,
    handler: controllers.getSingle,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: schemas.createSchema,
    handler: controllers.create,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: schemas.updateSchema,
    handler: controllers.update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: schemas.removeSchema,
    handler: controllers.remove,
  });
};
