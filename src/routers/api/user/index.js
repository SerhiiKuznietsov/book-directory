const {
  getList,
  create,
  getSingle,
  update,
  remove,
} = require('../../../controllers/user');

const {
  getListSchema,
  getSchema,
  createSchema,
  removeSchema,
  updateSchema,
} = require('./schemas');

module.exports = async (fastify) => {
  fastify. route({
    method: 'GET',
    url: '/',
    schema: getListSchema,
    handler: getList,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: getSchema,
    handler: getSingle,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: createSchema,
    handler: create,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: updateSchema,
    handler: update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: removeSchema,
    handler: remove,
  });
};
