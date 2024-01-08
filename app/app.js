const express = require("express");
const cookieParser = require("cookie-parser");
const { appErrorHandlers } = require("./middlewares/appErrorHandler");
const { rootRouter } = require("./routers");

const app = express();

app.disable("x-powered-by");
app.use(cookieParser());
app.use(express.json());
app.use(rootRouter);

appErrorHandlers(app);

module.exports = {
  app,
};
