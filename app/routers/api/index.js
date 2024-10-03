const bookRouter = require('./book');
const roleRouter = require('./role');
const userRouter = require('./user');
const authRouter = require('./auth');
// const rolePolicyRouter = require('./role-policy');

module.exports = async (fastify) => {
  fastify.register(authRouter, { prefix: '/auth' });
  // fastify.register(rolePolicyRouter, { prefix: '/role-policy' })
  fastify.register(bookRouter, { prefix: '/book' });
  fastify.register(roleRouter, { prefix: '/role' });
  fastify.register(userRouter, { prefix: '/user' });
};
