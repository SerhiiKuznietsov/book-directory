const apiRouter = require('./api/router');

exports.registerAppRouters = (app, restContainer) => {
  app.register(apiRouter, {
    prefix: '/api',
    restContainer,
  });
};
