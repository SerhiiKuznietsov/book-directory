const {
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
} = require('../../../constants/policy');

const idProperty = {
  type: 'integer',
  minimum: 1,
};

const titleProperty = {
  type: 'string',
  minLength: MIN_TITLE_LENGTH,
  maxLength: MAX_TITLE_LENGTH,
};

const createBookSchema = {
  body: {
    type: 'object',
    required: ['title'],
    properties: {
      title: titleProperty,
    },
  },
};

const getBookSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: idProperty,
    },
  },
};

const updateBookSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: idProperty,
    },
  },
  body: {
    type: 'object',
    required: ['title'],
    properties: {
      title: titleProperty,
    },
  },
};

const removeBookSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: idProperty,
    },
  },
};

module.exports = {
  createBookSchema,
  getBookSchema,
  updateBookSchema,
  removeBookSchema,
};
