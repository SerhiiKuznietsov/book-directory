const { USER_API_TAG } = require('../../../../../constants/user');
const { id, name } = require('../../../../../domain/user/entities/properties');

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
