const { id, title } = require('../properties');

module.exports = {
  tags: ['book'],
  response: {
    200: {
      type: 'array',
      description: 'Successful response',
      items: {
        type: 'object',
        properties: {
          id,
          title,
        },
      },
    },
  },
};
