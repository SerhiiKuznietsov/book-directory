const { BOOK_API_TAG } = require('../../../../../constants/book');
const {
  id,
  title,
  description,
  publisher,
  publishedAt,
  pageCount,
} = require('../../../../../domain/book/entities/properties');

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
    required: ['title', 'description', 'publisher', 'publishedAt', 'pageCount'],
    properties: {
      title,
      description,
      publisher,
      publishedAt,
      pageCount,
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
