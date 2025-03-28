const schemas = require('./schemas');

module.exports = async (app, { restContainer }) => {
  const controllers = restContainer.get('controllers.auth');

  app.route({
    method: 'POST',
    url: '/sign-in',
    schema: schemas.signInSchema,
    handler: controllers.signIn,
  });

  app.route({
    method: 'GET',
    url: '/sign-out',
    schema: schemas.signOutSchema,
    handler: controllers.signOut,
  });

  app.route({
    method: 'POST',
    url: '/register',
    schema: schemas.registerSchema,
    handler: controllers.register,
  });

  app.route({
    method: 'POST',
    url: '/refresh-token',
    schema: schemas.refreshTokenSchema,
    handler: controllers.refreshToken,
  });
};
