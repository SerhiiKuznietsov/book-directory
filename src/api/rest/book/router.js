const hooks = require('../common/hooks/book');
const schemas = require('./schemas');
const { BookControllers } = require('./controllers');
const { CreateBookCtrl } = require('./controllers/create');
const { GetBookListCtrl } = require('./controllers/list');
const { RemoveBookCtrl } = require('./controllers/remove');
const { GetSingleBookCtrl } = require('./controllers/single');
const { UpdateBookCtrl } = require('./controllers/update');

module.exports = async (fastify, { container }) => {
  const bookControllers = new BookControllers(
    new GetBookListCtrl(container.get('uc.getBookList')),
    new GetSingleBookCtrl(container.get('uc.getBookById')),
    new CreateBookCtrl(container.get('uc.createBook')),
    new UpdateBookCtrl(container.get('uc.updateBook')),
    new RemoveBookCtrl(container.get('uc.removeBook'))
  );

  fastify.route({
    method: 'GET',
    url: '/',
    schema: schemas.getListSchema,
    onRequest: [hooks.readCheckMiddleware],
    handler: bookControllers.getList,
  });

  fastify.route({
    method: 'GET',
    url: '/:id',
    schema: schemas.getSchema,
    onRequest: [hooks.readCheckMiddleware],
    handler: bookControllers.getSingle,
  });

  fastify.route({
    method: 'POST',
    url: '/',
    schema: schemas.createSchema,
    onRequest: [hooks.createCheckMiddleware],
    handler: bookControllers.create,
  });

  fastify.route({
    method: 'PUT',
    url: '/:id',
    schema: schemas.updateSchema,
    onRequest: [hooks.updateCheckMiddleware],
    handler: bookControllers.update,
  });

  fastify.route({
    method: 'DELETE',
    url: '/:id',
    schema: schemas.removeSchema,
    onRequest: [hooks.deleteCheckMiddleware],
    handler: bookControllers.remove,
  });
};
