const controllers = require('./controllers');
const schemas = require('./schemas');

module.exports = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/sign-in',
    schema: schemas.signInSchema,
    handler: controllers.signInCtrl,
  });

  fastify.route({
    method: 'GET',
    url: '/sign-out',
    schema: schemas.signOutSchema,
    handler: controllers.signOutCtrl,
  });

  fastify.route({
    method: 'GET',
    url: '/refresh-token',
    schema: schemas.refreshTokenSchema,
    handler: controllers.refreshTokenCtrl,
  });
};
