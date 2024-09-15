const { id, name } = require('../properties');

module.exports = {
  tags: ['user'],
  response: {
    200: {
      description: 'Successful response',
      type: 'array',
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
