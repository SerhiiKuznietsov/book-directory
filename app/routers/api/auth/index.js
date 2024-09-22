const { signIn, signOut } = require('../../../controllers/auth');
const { signInSchema, signOutSchema } = require('../../../schemas/auth/routes');

module.exports = async (fastify) => {
  fastify.route({
    method: 'POST',
    url: '/sign-in',
    schema: signInSchema,
    handler: signIn,
  });

  fastify.route({
    method: 'GET',
    url: '/sign-out',
    schema: signOutSchema,
    handler: signOut,
  });
};
