const { USER_API_TAG } = require('../../../../constants/user');
const { id, name, email, roleId } = require('../../../../schemas/user/properties');

module.exports = {
  tags: [USER_API_TAG],
  body: {
    type: 'object',
    required: ['name', 'email', 'roleId'],
    properties: {
      name,
      email,
      roleId,
    },
  },
  response: {
    201: {
      description: 'Successful response',
      type: 'object',
      properties: {
        id,
      },
    },
  },
};
