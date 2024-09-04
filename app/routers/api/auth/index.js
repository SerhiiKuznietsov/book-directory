const { signIn, signOut } = require('../../../controllers/auth');

module.exports = async (fastify) => {
  fastify.post('/sign-in', signIn);
  fastify.get('/sign-out', signOut);
};
