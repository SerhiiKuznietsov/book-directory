const express = require('express');
const cookieParser = require('cookie-parser');
const { rootErrorHandlers } = require('./middlewares/rootErrorHandler');
const appLogger = require('./middlewares/logger');
const { rootRouter } = require('./routers');
const { PORT } = require('./config/server');

const app = express();

// TODO - add security logic (helmet, cors)
// TODO - add swagger

app.set('port', PORT);
app.use(appLogger)
app.disable('x-powered-by');
app.use(cookieParser());
app.use(express.json());
app.use(rootRouter);

rootErrorHandlers(app);

module.exports = {
  app,
};
