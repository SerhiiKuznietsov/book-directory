const bookRouter = require('./book');
const policyRouter = require('./policy');
const roleRouter = require('./role');
const userRouter = require('./user');
const authRouter = require('./auth');
const rolePolicyRouter = require('./role-policy');

module.exports = async (app) => {
  app.register(authRouter, { prefix: '/auth' });
  // .register(rolePolicyRouter, { prefix: '/role-policy' })
  app.register(bookRouter, { prefix: '/book' });
  app.register(policyRouter, { prefix: '/policy' })
  app.register(roleRouter, { prefix: '/role' });
  app.register(userRouter, { prefix: '/user' });
};
