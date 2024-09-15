const { id, name } = require('../properties');

module.exports = {
  tags: ['role'],
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name,
    },
  },
  response: {
    201: {
      description: 'Successful response',
      type: 'object',
      properties: { id },
    },
  },
};
