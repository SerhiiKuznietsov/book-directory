const authRouter = require('./auth/router');
const bookRouter = require('./book/router');
const roleRouter = require('./role/router');
const userRouter = require('./user/router');
// const rolePolicyRouter = require('./rolePolicy/router');

module.exports = async (app, { restContainer }) => {
  app.register(authRouter, {
    prefix: '/auth',
    restContainer,
  });
  app.register(bookRouter, {
    prefix: '/book',
    restContainer,
  });
  app.register(roleRouter, {
    prefix: '/role',
    restContainer,
  });
  app.register(userRouter, {
    prefix: '/user',
    restContainer,
  });
  // app.register(rolePolicyRouter, { prefix: '/api/role-policy' });
};
