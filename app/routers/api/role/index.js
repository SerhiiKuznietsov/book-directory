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
const {
  getListSchema,
  getSchema,
  createSchema,
  removeSchema,
  updateSchema,
} = require('../../../schemas/role/routes');

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
    schema: removeSchema,
    onRequest: [updateCheckMiddleware],
    handler: update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: updateSchema,
    onRequest: [deleteCheckMiddleware],
    handler: remove,
  });
};
