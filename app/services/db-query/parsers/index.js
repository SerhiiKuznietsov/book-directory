const { validStaticParams } = require('../../../validations/db-query');

const parseJsonFiledOrRemove = (query, fieldName) => {
  try {
    if (query[fieldName]) {
      query[fieldName] = JSON.parse(query[fieldName]);
    }
  } catch {
    delete query[fieldName];
  }
};

const parseOrder = (query) => parseJsonFiledOrRemove(query, 'order');
const parseAttrs = (query) => parseJsonFiledOrRemove(query, 'attrs');
const parseNested = (query) => parseJsonFiledOrRemove(query, 'nested');

exports.parseQuery = (query) => {
  parseOrder(query);
  parseAttrs(query);
  parseNested(query);

  const validatedQuery = validStaticParams(query);

  return validatedQuery;
};
