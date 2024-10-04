const { checkMiddlewareFactory } = require('./checkMiddlewareFactory');
const { USER_POLICY_NAME } = require('../constants/policeName');

module.exports = checkMiddlewareFactory(USER_POLICY_NAME);
