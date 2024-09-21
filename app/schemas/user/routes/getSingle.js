const { USER_API_TAG } = require('../../../constants/user');
const userProperties = require('../properties');
const { id } = userProperties;

module.exports = {
  tags: [USER_API_TAG],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id,
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: userProperties,
    },
  },
};
