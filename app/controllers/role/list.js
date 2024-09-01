const { getRolesList } = require('../../services/role');

exports.getList = async (req, reply) => {
  const rolesList = await getRolesList(req.query);

  return rolesList;
};
