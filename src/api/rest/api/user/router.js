const schemas = require('./schemas');
const { UserPolicyHook } = require('../../common/hooks/user');

module.exports = async (fastify, { restContainer }) => {
  const controllers = restContainer.get('controllers.user');
  const authHook = restContainer.get('hook.user');
  const userHooks = new UserPolicyHook();

  fastify.addHook('onRequest', authHook.use);

  fastify.route({
    method: 'GET',
    url: '/',
    schema: schemas.getListSchema,
    onRequest: [userHooks.read()],
    handler: controllers.getList,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: schemas.getSchema,
    onRequest: [userHooks.read()],
    handler: controllers.getSingle,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: schemas.createSchema,
    onRequest: [userHooks.create()],
    handler: controllers.create,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: schemas.updateSchema,
    onRequest: [userHooks.update()],
    handler: controllers.update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: schemas.removeSchema,
    onRequest: [userHooks.remove()],
    handler: controllers.remove,
  });
};
