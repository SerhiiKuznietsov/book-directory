const { BOOK_API_TAG } = require('../../../../constants/book');
const { id, title } = require('../../../../schemas/book/properties');

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
