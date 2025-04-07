const {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MIN_PAGE_COUNT,
  MAX_PAGE_COUNT,
  MIN_PUBLISHER_LENGTH,
  MAX_PUBLISHER_LENGTH,
} = require('../../../constants/book');

module.exports = {
  id: {
    type: 'string',
    format: 'uuid-v4',
  },
  title: {
    type: 'string',
    minLength: MIN_TITLE_LENGTH,
    maxLength: MAX_TITLE_LENGTH,
  },
  description: {
    type: 'string',
    minLength: 1,
  },
  publisher: {
    type: 'string',
    minLength: MIN_PUBLISHER_LENGTH,
    maxLength: MAX_PUBLISHER_LENGTH,
  },
  publishedAt: {
    type: 'string',
    format: 'date',
  },
  pageCount: {
    type: 'integer',
    minimum: MIN_PAGE_COUNT,
    maximum: MAX_PAGE_COUNT,
  },
  createdAt: { type: 'string', format: 'date-time' },
  updatedAt: { type: 'string', format: 'date-time' },
};
