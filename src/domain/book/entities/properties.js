const { MIN_TITLE_LENGTH, MAX_TITLE_LENGTH } = require('../../../constants/book');

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
  createdAt: { type: 'string', format: 'date-time' },
  updatedAt: { type: 'string', format: 'date-time' },
};
