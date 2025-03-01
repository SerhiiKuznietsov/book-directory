const {
  NORMAL_GROUPING_NAME,
  REVERSE_GROUPING_NAME,
  MIN_LIMIT_LENGTH,
  DEFAULT_PAGE_LENGTH,
} = require('../../../constants/dbQuery');
const { validQueryParams } = require('./_schemas/queryParserShema');

// TODO - needs to be encapsulated for the domain business code
exports.parseQueryParams = (query) => {
  validQueryParams(query);
  const {
    page = DEFAULT_PAGE_LENGTH,
    limit = MIN_LIMIT_LENGTH,
    sortBy = 'createdAt',
    sortOrder = NORMAL_GROUPING_NAME,
  } = query;

  const pagination = {
    limit,
    offset: (page - 1) * limit,
  };

  const sorting = {
    order: [
      [
        sortBy,
        sortOrder.toUpperCase() === REVERSE_GROUPING_NAME
          ? REVERSE_GROUPING_NAME
          : NORMAL_GROUPING_NAME,
      ],
    ],
  };

  return { pagination, sorting };
};
