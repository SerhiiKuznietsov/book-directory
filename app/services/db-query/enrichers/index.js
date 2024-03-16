const { enrichAttributes } = require("./attributes");
const { enrichOrder } = require("./order");
const { enrichPagination } = require("./pagination");
const { enrichRawOptions } = require("./raw");

exports.useDbQueryEnrichers = (result, parsedQuery, queryConfiguration) => {
  enrichPagination(result, parsedQuery);
  enrichAttributes(result, queryConfiguration);
  enrichOrder(result, parsedQuery, queryConfiguration);
  enrichRawOptions(result, queryConfiguration);
};
