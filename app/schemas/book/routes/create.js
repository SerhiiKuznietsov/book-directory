const { id, title } = require('../properties');

module.exports = {
  tags: ['book'],
  body: {
    type: 'object',
    required: ['title'],
    properties: {
      title,
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
