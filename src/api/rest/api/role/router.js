const schemas = require('./schemas');
const { RolePolicyHook } = require('../../common/hooks/role');

module.exports = async (fastify, { restContainer }) => {
  const controllers = restContainer.get('controllers.role');
  const authHook = restContainer.get('hook.user');
  const roleHooks = new RolePolicyHook();

  fastify.addHook('onRequest', authHook.use);

  fastify.route({
    method: 'GET',
    url: '/',
    schema: schemas.getListSchema,
    onRequest: [roleHooks.read()],
    handler: controllers.getList,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: schemas.getSchema,
    onRequest: [roleHooks.read()],
    handler: controllers.getSingle,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: schemas.createSchema,
    onRequest: [roleHooks.create()],
    handler: controllers.create,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: schemas.updateSchema,
    onRequest: [roleHooks.update()],
    handler: controllers.update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: schemas.removeSchema,
    onRequest: [roleHooks.remove()],
    handler: controllers.remove,
  });
};
