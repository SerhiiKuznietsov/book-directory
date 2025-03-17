const authRouter = require('./auth/router');
const bookRouter = require('./book/router');
const roleRouter = require('./role/router');
const userRouter = require('./user/router');
// const rolePolicyRouter = require('./rolePolicy/router');

module.exports = async (app, { container }) => {
  app.register(authRouter, {
    // TODO - need encapsulate
    prefix: '/auth',
    container,
  });
  app.register(bookRouter, {
    // TODO - need encapsulate
    prefix: '/book',
    container,
  });
  app.register(roleRouter, {
    // TODO - need encapsulate
    prefix: '/role',
    container,
  });
  app.register(userRouter, {
    // TODO - need encapsulate
    prefix: '/user',
    container,
  });
  // app.register(rolePolicyRouter, { prefix: '/api/role-policy' });
};
