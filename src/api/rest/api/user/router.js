const schemas = require('./schemas');
const { UserControllers } = require('./controllers');
const { CreateUserCtrl } = require('./controllers/create');
const { GetUserListCtrl } = require('./controllers/list');
const { RemoveUserCtrl } = require('./controllers/remove');
const { GetSingleUserCtrl } = require('./controllers/single');
const { UpdateUserCtrl } = require('./controllers/update');

module.exports = async (fastify, { container }) => {
  const userControllers = new UserControllers(
    new GetUserListCtrl(container.get('uc.getUserList')),
    new GetSingleUserCtrl(container.get('uc.getUserById')),
    new CreateUserCtrl(container.get('uc.createUser')),
    new UpdateUserCtrl(container.get('uc.updateUser')),
    new RemoveUserCtrl(container.get('uc.removeUser'))
  );

  fastify.route({
    method: 'GET',
    url: '/',
    schema: schemas.getListSchema,
    handler: userControllers.getList,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: schemas.getSchema,
    handler: userControllers.getSingle,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: schemas.createSchema,
    handler: userControllers.create,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: schemas.updateSchema,
    handler: userControllers.update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: schemas.removeSchema,
    handler: userControllers.remove,
  });
};
