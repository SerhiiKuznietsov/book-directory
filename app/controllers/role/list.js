const { getRolesList } = require("../../services/role");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getList = ctrl(async (req) => {
  const rolesList = await getRolesList();

  return rolesList;
});
