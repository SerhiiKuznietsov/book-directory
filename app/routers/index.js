
const { rootAuthenticate } = require('../middlewares/auth');
const apiRouter = require('./api');

const rootRouter = async (app) => {
  app.register(rootAuthenticate);
  app.register(apiRouter, { prefix: '/api' });
};

module.exports = { rootRouter };