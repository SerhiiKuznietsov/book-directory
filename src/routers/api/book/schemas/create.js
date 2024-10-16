const { BOOK_API_TAG } = require('../../../../constants/book');
const { id, title } = require('../../../../schemas/book/properties');

module.exports = {
  tags: [BOOK_API_TAG],
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
