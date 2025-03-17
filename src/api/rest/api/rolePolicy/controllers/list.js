const { getRolesPolicesList } = require('../../../../domain/rolePolicy/useCases');

exports.getList = async (req) => {
  const rolesPolicesList = await getRolesPolicesList(req.query);

  return rolesPolicesList;
};
