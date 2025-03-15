const fastifyCookie = require('@fastify/cookie');
const { registerSwagger } = require('./swagger');
const authRouter = require('./auth/router');
const bookRouter = require('./book/router');
const roleRouter = require('./role/router');
const userRouter = require('./user/router');
// const rolePolicyRouter = require('./rolePolicy/router');
const { rootErrorHandlers } = require('./common/hooks/rootErrorHandler');
const { COOKIE_SECRET } = require('../../config/secrets');

exports.initRest = async (app, container) => {
  registerSwagger(app);
  app.register(fastifyCookie, {
    secret: COOKIE_SECRET,
  });

  app.route({
    method: 'GET',
    url: '/health',
    handler: async () => ({ status: 'ok' }),
  });

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

  app.setErrorHandler(rootErrorHandlers);
};
