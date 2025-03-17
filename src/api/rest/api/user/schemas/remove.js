const { USER_API_TAG } = require('../../../../../constants/user');
const { id } = require('../../../../../domain/user/entities/properties');

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
      properties: {
        id,
      },
    },
  },
};
