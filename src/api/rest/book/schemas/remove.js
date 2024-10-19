const { BOOK_API_TAG } = require('../../../../constants/book');
const { id } = require('../../../../domain/book/entities/properties');

module.exports = {
  tags: [BOOK_API_TAG],
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
