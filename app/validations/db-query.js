const {
  MIN_LIMIT_LENGTH,
  MAX_LIMIT_LENGTH,
  DEFAULT_LIMIT_LENGTH,
  DEFAULT_PAGE_LENGTH,
} = require('../constants/db-query');
const { compileSchema, valid } = require('../utils/ajv-validator');

const validateQuery = compileSchema({
  type: 'object',
  properties: {
    limit: {
      type: 'integer',
      minimum: MIN_LIMIT_LENGTH,
      maximum: MAX_LIMIT_LENGTH,
      default: DEFAULT_LIMIT_LENGTH,
    },
    page: {
      type: 'integer',
      minimum: 1,
      default: DEFAULT_PAGE_LENGTH,
    },
    order: {
      type: 'array',
      items: { type: 'string' },
    },
    nested: {
      type: 'object',
    },
    attrs: {
      type: 'array',
      items: { type: 'string' },
    },
  },
});

exports.validStaticParams = (query) => valid(validateQuery, query);
