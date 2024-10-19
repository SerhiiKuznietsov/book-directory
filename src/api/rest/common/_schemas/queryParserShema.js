const {
  MIN_LIMIT_LENGTH,
  MAX_LIMIT_LENGTH,
  DEFAULT_LIMIT_LENGTH,
  DEFAULT_PAGE_LENGTH,
  ALL_GROUPING_NAME,
} = require('../../../../constants/dbQuery');
const { compileSchema, valid } = require('../../../../utils/ajvValidator');

exports.queryParamsSchema = {
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
    sortBy: {
      type: 'string',
    },
    sortOrder: {
      type: 'string',
      enum: ALL_GROUPING_NAME,
    },
    order: {
      type: 'array',
      items: { type: 'string' },
    },
  },
};

const validateQuery = compileSchema(exports.queryParamsSchema);

exports.validQueryParams = (query) => valid(validateQuery, query);
