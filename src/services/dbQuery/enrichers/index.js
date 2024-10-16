const { enrichAttributes } = require('./attributes');
const { enrichIncludes } = require('./includes');
const { enrichOrder } = require('./order');
const { enrichPagination } = require('./pagination');
const { enrichRawOptions } = require('./raw');

exports.useDbQueryEnrichers = (result, parsedQuery, queryConfiguration) => {
  enrichPagination(result, parsedQuery);
  enrichAttributes(result, parsedQuery.attrs, queryConfiguration);
  enrichOrder(result, parsedQuery.order, queryConfiguration.model);
  enrichRawOptions(result, queryConfiguration.raw);
  enrichIncludes(result, parsedQuery.nested, queryConfiguration.nestedModel);
};
