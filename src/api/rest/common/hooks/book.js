const { checkMiddlewareFactory } = require('./checkMiddlewareFactory');
const { BOOK_POLICY_NAME } = require('../../../../constants/policeName');

module.exports = checkMiddlewareFactory(BOOK_POLICY_NAME);
