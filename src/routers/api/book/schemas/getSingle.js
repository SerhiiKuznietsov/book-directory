const { BOOK_API_TAG } = require('../../../../constants/book');
const bookProperties = require('../../../../schemas/book/properties');
const { id } = bookProperties;

module.exports = {
  tags: [BOOK_API_TAG],
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
