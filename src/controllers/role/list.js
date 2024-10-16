const { getRolesList } = require('../../services/role');

exports.getList = async (req) => {
  const rolesList = await getRolesList(req.query);

  return rolesList;
};
