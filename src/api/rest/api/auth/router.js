const schemas = require('./schemas');
const { AuthControllers } = require('./controllers');
const { RefreshTokenCtrl } = require('./controllers/refreshToken');
const { RegisterCtrl } = require('./controllers/register');
const { SignInCtrl } = require('./controllers/signIn');
const { SignOutCtrl } = require('./controllers/signOut');

module.exports = async (app, { container }) => {
  const authControllers = new AuthControllers(
    new SignInCtrl(container.get('uc.signIn')),
    new SignOutCtrl(container.get('uc.signOut')),
    new RegisterCtrl(container.get('uc.registerUser')),
    new RefreshTokenCtrl(container.get('uc.refreshToken'))
  );

  app.route({
    method: 'POST',
    url: '/sign-in',
    schema: schemas.signInSchema,
    handler: authControllers.signIn,
  });

  app.route({
    method: 'GET',
    url: '/sign-out',
    schema: schemas.signOutSchema,
    handler: authControllers.signOut,
  });

  app.route({
    method: 'POST',
    url: '/register',
    schema: schemas.registerSchema,
    handler: authControllers.register,
  });

  app.route({
    method: 'POST',
    url: '/refresh-token',
    schema: schemas.refreshTokenSchema,
    handler: authControllers.refreshToken,
  });
};
