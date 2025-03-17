const { BOOK_API_TAG } = require('../../../../../constants/book');
const { id, title } = require('../../../../../domain/book/entities/properties');

module.exports = {
  tags: [BOOK_API_TAG],
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
