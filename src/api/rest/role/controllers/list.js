const { getRolesList } = require('../../../../domain/role/useCases/list');
const { parseQueryParams } = require('../../common/queryParser');

exports.getList = async (req) => {
  const queryParams = parseQueryParams(req.query);

  const rolesList = await getRolesList(queryParams);

  return rolesList;
};
