const apiRouter = require('./api/router');

exports.registerAppRouters = (app, container) => {
  app.register(apiRouter, {
    prefix: '/api',
    container,
  });
};
