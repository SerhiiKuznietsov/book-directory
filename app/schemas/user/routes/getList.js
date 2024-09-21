const { USER_API_TAG } = require('../../../constants/user');
const { id, name } = require('../properties');

module.exports = {
  tags: [USER_API_TAG],
  response: {
    200: {
      description: 'Successful response',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id,
          name,
        },
      },
    },
  },
};
