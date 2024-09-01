const fastify = require('fastify')




const { logger } = require('./utils/logger');

const app = fastify({ logger });

const cookieParser = require('cookie-parser');
const { rootErrorHandlers } = require('./middlewares/rootErrorHandler');
const appLogger = require('./middlewares/logger');
const { rootRouter } = require('./routers');
const { PORT } = require('./config/server');


// TODO - add security logic (helmet, cors)
// TODO - add swagger

// app.set('port', PORT);
// app.disable('x-powered-by');
// app.use(appLogger);
// app.use(cookieParser());
// app.use(express.send());
// app.use(rootRouter);
app.register(rootRouter);

// rootErrorHandlers(app);

module.exports = {
  app,
};
