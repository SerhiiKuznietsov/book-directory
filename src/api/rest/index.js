const authRouter = require('./auth/router');
const bookRouter = require('./book/router');
const roleRouter = require('./role/router');
const userRouter = require('./user/router');
// const rolePolicyRouter = require('./rolePolicy/router');
const authController = require('./auth/controllers');
const bookController = require('./book/controllers');
const roleController = require('./role/controllers');
const userController = require('./user/controllers');
const { rootErrorHandlers } = require('./common/hooks/rootErrorHandler');

exports.initRest = (app) => {
  app.register(authRouter, {
    prefix: '/api/auth',
    controllers: authController,
  });
  app.register(bookRouter, {
    prefix: '/api/book',
    controllers: bookController,
  });
  app.register(roleRouter, {
    prefix: '/api/role',
    controllers: roleController,
  });
  app.register(userRouter, {
    prefix: '/api/user',
    controllers: userController,
  });
  // app.register(rolePolicyRouter, { prefix: '/api/role-policy' });

  app.setErrorHandler(rootErrorHandlers);
};
