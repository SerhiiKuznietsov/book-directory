const { removeRole } = require("../../services/role");
const { ctrl } = require("../../utils/controller-wrapper");

exports.remove = ctrl(async (req) => {
  const { id } = req.params;

  const roleId = await removeRole(id);

  return roleId;
});
