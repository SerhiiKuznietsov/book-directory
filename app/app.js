const fastify = require('fastify')
const fastifyCookie = require('fastify-cookie');
const { logger } = require('./utils/logger');
const { rootErrorHandlers } = require('./middlewares/rootErrorHandler');
const { rootRouter } = require('./routers');

const app = fastify({ logger });

app.register(fastifyCookie);
app.register(rootRouter);
app.setErrorHandler(rootErrorHandlers);

module.exports = {
  app,
};
