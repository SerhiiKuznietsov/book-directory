
const { rootAuthenticate } = require('../middlewares/auth');
const apiRouter = require('./api');

const rootRouter = async (fastify) => {
  fastify.register(rootAuthenticate);
  fastify.register(apiRouter, { prefix: '/api' });
};

module.exports = { rootRouter };