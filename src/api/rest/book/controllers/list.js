const { getBooksList } = require('../../../../domain/book/useCases/list');
const { parseQueryParams } = require('../../common/queryParser');

exports.getList = async (req) => {
  const queryParams = parseQueryParams(req.query);

  const booksList = await getBooksList(queryParams);

  return booksList;
};
