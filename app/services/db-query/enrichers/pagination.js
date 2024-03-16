exports.enrichPagination = (result, query) => {
  const { limit, page } = query;

  result.offset = page * limit;
  result.limit = limit;
};
