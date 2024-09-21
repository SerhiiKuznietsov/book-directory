const { BOOK_API_TAG } = require('../../../constants/book');
const { id, title } = require('../properties');

module.exports = {
  tags: [BOOK_API_TAG],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id,
    },
  },
  body: {
    type: 'object',
    required: ['title'],
    properties: {
      title,
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
