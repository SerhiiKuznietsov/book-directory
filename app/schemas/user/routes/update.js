const { id, name, email, roleId } = require('../properties');

module.exports = {
  tags: ['user'],
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
