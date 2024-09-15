const { id, name } = require('../properties');

module.exports = {
  tags: ['role'],
  response: {
    200: {
      type: 'array',
      description: 'Successful response',
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
