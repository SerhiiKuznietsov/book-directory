const {
  getList,
  create,
  getSingle,
  update,
  remove,
} = require('../../../controllers/role');
const {
  readCheckMiddleware,
  createCheckMiddleware,
  updateCheckMiddleware,
  deleteCheckMiddleware,
} = require('../../../middlewares/role');
const { createRoleSchema, getRoleSchema, updateRoleSchema, removeRoleSchema } = require('./schema');

module.exports = async (app) => {
  app.route({
    method: 'GET',
    url: '/',
    onRequest: [readCheckMiddleware],
    handler: getList,
  });

  app.route({
    method: 'POST',
    url: '/',
    schema: createRoleSchema,
    onRequest: [createCheckMiddleware],
    handler: create,
  });

  app.route({
    method: 'GET',
    url: '/:id',
    schema: getRoleSchema,
    onRequest: [readCheckMiddleware],
    handler: getSingle,
  });

  app.route({
    method: 'PUT',
    url: '/:id',
    schema: updateRoleSchema,
    onRequest: [updateCheckMiddleware],
    handler: update,
  });

  app.route({
    method: 'DELETE',
    url: '/:id',
    schema: removeRoleSchema,
    onRequest: [deleteCheckMiddleware],
    handler: remove,
  });
};
