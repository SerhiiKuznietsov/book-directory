const {
  getList,
  create,
  getSingle,
  update,
  remove,
} = require('../../../controllers/user');
const {
  readCheckMiddleware,
  createCheckMiddleware,
  updateCheckMiddleware,
  deleteCheckMiddleware,
} = require('../../../middlewares/user');
const {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  removeUserSchema,
} = require('./schema');

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
    schema: createUserSchema,
    onRequest: [createCheckMiddleware],
    handler: create,
  });

  app.route({
    method: 'GET',
    url: '/:id',
    schema: getUserSchema,
    onRequest: [readCheckMiddleware],
    handler: getSingle,
  });

  app.route({
    method: 'PUT',
    url: '/:id',
    schema: updateUserSchema,
    onRequest: [updateCheckMiddleware],
    handler: update,
  });

  app.route({
    method: 'DELETE',
    url: '/:id',
    schema: removeUserSchema,
    onRequest: [deleteCheckMiddleware],
    handler: remove,
  });
};
