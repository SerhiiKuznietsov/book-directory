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
    schema: createRoleSchema,
    onRequest: [createCheckMiddleware],
    handler: create,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: getRoleSchema,
    onRequest: [readCheckMiddleware],
    handler: getSingle,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: updateRoleSchema,
    onRequest: [updateCheckMiddleware],
    handler: update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: removeRoleSchema,
    onRequest: [deleteCheckMiddleware],
    handler: remove,
  });
};
