const {
  getList,
  create,
  getSingle,
  update,
  remove,
} = require('../../../controllers/book');
const {
  readCheckMiddleware,
  createCheckMiddleware,
  updateCheckMiddleware,
  deleteCheckMiddleware,
} = require('../../../middlewares/book');
const {
  createBookSchema,
  getBookSchema,
  updateBookSchema,
  removeBookSchema,
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
    schema: createBookSchema,
    onRequest: [createCheckMiddleware],
    handler: create,
  });

  app.route({
    method: 'GET',
    url: '/:id',
    schema: getBookSchema,
    onRequest: [readCheckMiddleware],
    handler: getSingle,
  });

  app.route({
    method: 'PUT',
    url: '/:id',
    schema: updateBookSchema,
    onRequest: [updateCheckMiddleware],
    handler: update,
  });

  app.route({
    method: 'DELETE',
    url: '/:id',
    schema: removeBookSchema,
    onRequest: [deleteCheckMiddleware],
    handler: remove,
  });
};
