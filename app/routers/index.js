const rootRouter = require("express").Router();
const { rootAuthenticate } = require("../middlewares/auth");
const apiRouter = require('./api');

rootRouter.get('/', (req, res) => {
  res.json('hello world');
  // TODO - remove after testing
})

// TODO - add authorization logic before authentication middleware
rootRouter.use(rootAuthenticate);
rootRouter.use('/api', apiRouter);

module.exports = { rootRouter };
