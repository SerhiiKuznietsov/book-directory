const { getRolesPolicesList } = require('../../services/role-policy');

exports.getList = async (req) => {
  const rolesPolicesList = await getRolesPolicesList(req.query);

  return rolesPolicesList;
};
