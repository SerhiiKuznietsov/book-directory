const fastifyCookie = require('@fastify/cookie');
const { registerSwagger } = require('./swagger');
// const authRouter = require('./auth/router');
const bookRouter = require('./book/router');
const roleRouter = require('./role/router');
const userRouter = require('./user/router');
// const rolePolicyRouter = require('./rolePolicy/router');
const { rootErrorHandlers } = require('./common/hooks/rootErrorHandler');

exports.initRest = async (app, data) => {
  const { bookContainer, roleContainer, userContainer } = data;

  registerSwagger(app);
  app.register(fastifyCookie);

  // app.register(authRouter, {
  //   prefix: '/api/auth',
  //   authController,
  // });
  app.register(bookRouter, {
    prefix: '/api/book',
    bookContainer,
  });
  app.register(roleRouter, {
    prefix: '/api/role',
    roleContainer,
  });
  app.register(userRouter, {
    prefix: '/api/user',
    userContainer,
  });
  // app.register(rolePolicyRouter, { prefix: '/api/role-policy' });

  app.setErrorHandler(rootErrorHandlers);
};
