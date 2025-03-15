const fastifyCookie = require('@fastify/cookie');
const { COOKIE_SECRET } = require('../../config/secrets');

exports.registerCookie = (app) => {
  app.register(fastifyCookie, {
    secret: COOKIE_SECRET,
  });
};
