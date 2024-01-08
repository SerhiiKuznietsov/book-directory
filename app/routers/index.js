const rootRouter = require("express").Router();
const { rootAuthenticate } = require("../middlewares/auth");
const apiRouter = require('./api');

rootRouter.get('/', (req, res) => {
  res.json('hello world');
})

rootRouter.use(rootAuthenticate);
rootRouter.use('/api', apiRouter);

module.exports = { rootRouter };
