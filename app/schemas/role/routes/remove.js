const { id } = require('../properties');

module.exports = {
  tags: ['role'],
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
      properties: { id },
    },
  },
};
