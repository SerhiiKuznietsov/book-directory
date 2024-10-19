const roleRepositories = require('../../../infrastructure/role/repositories');

exports.getRolesList = async (q) => {
  const rolesList = await roleRepositories.getList(q);

  return rolesList;
};
