const { getUsersList } = require('../../../../domain/user/useCases/list');
const { parseQueryParams } = require('../../common/queryParser');

exports.getList = async (req) => {
  const queryParams = parseQueryParams(req.query);

  const usersList = await getUsersList(queryParams);

  return usersList;
};
