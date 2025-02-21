const schemas = require('./schemas');

module.exports = async (fastify, { authController }) => {
  fastify.route({
    method: 'POST',
    url: '/sign-in',
    schema: schemas.signInSchema,
    handler: authController.signInCtrl.handle,
  });

  fastify.route({
    method: 'GET',
    url: '/sign-out',
    schema: schemas.signOutSchema,
    handler: authController.signOutCtrl.handle,
  });

  fastify.route({
    method: 'GET',
    url: '/refresh-token',
    schema: schemas.refreshTokenSchema,
    handler: authController.refreshTokenCtrl.handle,
  });
};
