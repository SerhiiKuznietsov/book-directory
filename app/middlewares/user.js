const { checkMiddlewareFactory } = require("./check-middleware-factory");
const { USER_POLICY_NAME } = require("../constants/police-name");

module.exports = checkMiddlewareFactory(USER_POLICY_NAME);
