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

module.exports = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/',
    onRequest: [readCheckMiddleware],
    handler: getList,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: createBookSchema,
    onRequest: [createCheckMiddleware],
    handler: create,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: getBookSchema,
    onRequest: [readCheckMiddleware],
    handler: getSingle,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: updateBookSchema,
    onRequest: [updateCheckMiddleware],
    handler: update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: removeBookSchema,
    onRequest: [deleteCheckMiddleware],
    handler: remove,
  });
};
