const { id, name, email, roleId } = require('../properties');

module.exports = {
  tags: ['user'],
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
