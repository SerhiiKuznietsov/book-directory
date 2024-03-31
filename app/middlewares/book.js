const { checkMiddlewareFactory } = require("./check-middleware-factory");
const { BOOK_POLICY_NAME } = require("../constants/police-name");

module.exports = checkMiddlewareFactory(BOOK_POLICY_NAME);
