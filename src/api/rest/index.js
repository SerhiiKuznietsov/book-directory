const authRouter = require('./auth/router');
const bookRouter = require('./book/router');
const roleRouter = require('./role/router');
const userRouter = require('./user/router');
// const rolePolicyRouter = require('./rolePolicy/router');
const { rootErrorHandlers } = require('./common/hooks/rootErrorHandler');

exports.initRest = (app) => {
  app.register(authRouter, { prefix: '/api/auth' });
  app.register(bookRouter, { prefix: '/api/book' });
  app.register(roleRouter, { prefix: '/api/role' });
  app.register(userRouter, { prefix: '/api/user' });
  // app.register(rolePolicyRouter, { prefix: '/api/role-policy' });

  app.setErrorHandler(rootErrorHandlers);
};
