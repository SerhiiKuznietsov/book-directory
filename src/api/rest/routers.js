const authRouter = require('./auth/router');
const bookRouter = require('./book/router');
const roleRouter = require('./role/router');
const userRouter = require('./user/router');
// const rolePolicyRouter = require('./rolePolicy/router');

exports.registerAppRouters = (app, container) => {
  app.register(authRouter, {
    prefix: '/api/auth',
    container,
  });
  app.register(bookRouter, {
    prefix: '/api/book',
    container,
  });
  app.register(roleRouter, {
    prefix: '/api/role',
    container,
  });
  app.register(userRouter, {
    prefix: '/api/user',
    container,
  });
  // app.register(rolePolicyRouter, { prefix: '/api/role-policy' });
};
