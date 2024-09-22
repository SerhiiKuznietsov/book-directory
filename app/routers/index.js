const apiRouter = require('./api');

const rootRouter = async (fastify) => {
  fastify.register(apiRouter, { prefix: '/api' });
};

module.exports = { rootRouter };
