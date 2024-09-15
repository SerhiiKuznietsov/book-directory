const bookProperties = require('../properties');
const { id } = bookProperties;

module.exports = {
  tags: ['book'],
  description: 'Get book by ID',
  summary: 'Fetch book data',
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
      properties: bookProperties,
    },
  },
};
