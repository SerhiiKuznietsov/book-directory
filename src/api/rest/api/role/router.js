const schemas = require('./schemas');
const hooks = require('../../common/hooks/role');
const { RoleControllers } = require('./controllers');
const { GetRoleListCtrl } = require('./controllers/list');
const { GetSingleRoleCtrl } = require('./controllers/single');
const { CreateRoleCtrl } = require('./controllers/create');
const { UpdateRoleCtrl } = require('./controllers/update');
const { RemoveRoleCtrl } = require('./controllers/remove');

module.exports = async (fastify, { container }) => {
  const roleControllers = new RoleControllers(
    new GetRoleListCtrl(container.get('uc.getRoleList')),
    new GetSingleRoleCtrl(container.get('uc.getRoleById')),
    new CreateRoleCtrl(container.get('uc.createRole')),
    new UpdateRoleCtrl(container.get('uc.updateRole')),
    new RemoveRoleCtrl(container.get('uc.removeRole'))
  );

  fastify.route({
    method: 'GET',
    url: '/',
    schema: schemas.getListSchema,
    onRequest: [hooks.readCheckMiddleware],
    handler: roleControllers.getList,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: schemas.getSchema,
    onRequest: [hooks.readCheckMiddleware],
    handler: roleControllers.getSingle,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: schemas.createSchema,
    onRequest: [hooks.createCheckMiddleware],
    handler: roleControllers.create,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: schemas.updateSchema,
    onRequest: [hooks.updateCheckMiddleware],
    handler: roleControllers.update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: schemas.removeSchema,
    onRequest: [hooks.deleteCheckMiddleware],
    handler: roleControllers.remove,
  });
};
