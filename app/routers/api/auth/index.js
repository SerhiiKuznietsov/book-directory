const {
  signInCtrl,
  signOutCtrl,
  refreshTokenCtrl,
} = require('../../../controllers/auth');
const {
  signInSchema,
  signOutSchema,
  refreshTokenSchema,
} = require('./schemas');

module.exports = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/sign-in',
    schema: signInSchema,
    handler: signInCtrl,
  });

  fastify.route({
    method: 'GET',
    url: '/sign-out',
    schema: signOutSchema,
    handler: signOutCtrl,
  });

  fastify.route({
    method: 'GET',
    url: '/refresh-token',
    schema: refreshTokenSchema,
    handler: refreshTokenCtrl,
  });
};
