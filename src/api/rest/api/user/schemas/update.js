const { USER_API_TAG } = require('../../../../../constants/user');
const { id, name, email, roleId } = require('../../../../../domain/user/entities/properties');

module.exports = {
  tags: [USER_API_TAG],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id,
    },
  },
  body: {
    type: 'object',
    required: ['name', 'email', 'roleId'],
    properties: { name, email, roleId },
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
