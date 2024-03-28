const { getRolesPolicesList } = require("../../services/role-policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getList = ctrl(async (req) => {
  const rolesPolicesList = await getRolesPolicesList(req.query);

  return rolesPolicesList;
});
