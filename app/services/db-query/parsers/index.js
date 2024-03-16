const { validStaticParams } = require("../../../validations/db-query");

const parseOrder = (query) => {
  try {
    if (query.order) {
      query.order = JSON.parse(query.order);
    }
  } catch (e) {
    delete query.order;
  }
};

exports.parseQuery = (query) => {
  parseOrder(query);

  const validatedQuery = validStaticParams(query);

  return validatedQuery;
};
