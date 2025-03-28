const schemas = require('./schemas');
const { BookPolicyHook } = require('../../common/hooks/book');

module.exports = async (fastify, { restContainer }) => {
  const controllers = restContainer.get('controllers.book');
  const authHook = restContainer.get('hook.user');
  const bookHooks = new BookPolicyHook();

  fastify.addHook('onRequest', authHook.use);

  fastify.route({
    method: 'GET',
    url: '/',
    schema: schemas.getListSchema,
    onRequest: [bookHooks.read()],
    handler: controllers.getList,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: schemas.getSchema,
    onRequest: [bookHooks.read()],
    handler: controllers.getSingle,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: schemas.createSchema,
    onRequest: [bookHooks.create()],
    handler: controllers.create,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: schemas.updateSchema,
    onRequest: [bookHooks.update()],
    handler: controllers.update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: schemas.removeSchema,
    onRequest: [bookHooks.remove()],
    handler: controllers.remove,
  });
};
