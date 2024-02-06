const rootRouter = require("express").Router();
const { rootAuthenticate } = require("../middlewares/auth");
const apiRouter = require('./api');

// TODO - add authorization logic before authentication middleware
rootRouter.use(rootAuthenticate);
rootRouter.use('/api', apiRouter);

module.exports = { rootRouter };
