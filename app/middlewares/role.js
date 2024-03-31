const { checkMiddlewareFactory } = require("./check-middleware-factory");
const { ROLE_POLICY_NAME } = require("../constants/police-name");

module.exports = checkMiddlewareFactory(ROLE_POLICY_NAME);
