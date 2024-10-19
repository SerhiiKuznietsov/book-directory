const controllers = require('./controllers');

module.exports = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/',
    handler: controllers.getList,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    handler: controllers.getSingle,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    handler: controllers.create,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    handler: controllers.update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    handler: controllers.remove,
  });
};
