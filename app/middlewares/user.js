const { checkMiddlewareFactory } = require("./check-middleware-factory");
const { USER_POLICY_NAME } = require("../constants/police-name");
const {
  readCheckMiddleware,
  createCheckMiddleware,
  updateCheckMiddleware,
  deleteCheckMiddleware,
} = checkMiddlewareFactory(USER_POLICY_NAME);

module.exports = {
  readCheckMiddleware,
  createCheckMiddleware,
  updateCheckMiddleware,
  deleteCheckMiddleware,
};
