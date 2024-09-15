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
  getListSchema,
  getSchema,
  createSchema,
  removeSchema,
  updateSchema,
} = require('../../../schemas/book/routes');

module.exports = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: getListSchema,
    onRequest: [readCheckMiddleware],
    handler: getList,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: getSchema,
    onRequest: [readCheckMiddleware],
    handler: getSingle,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: createSchema,
    onRequest: [createCheckMiddleware],
    handler: create,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: updateSchema,
    onRequest: [updateCheckMiddleware],
    handler: update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: removeSchema,
    onRequest: [deleteCheckMiddleware],
    handler: remove,
  });
};
