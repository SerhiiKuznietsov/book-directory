const { checkMiddlewareFactory } = require('./checkMiddlewareFactory');
const { ROLE_POLICY_NAME } = require('../constants/policeName');

module.exports = checkMiddlewareFactory(ROLE_POLICY_NAME);
