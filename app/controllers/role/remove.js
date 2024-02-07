const { removeRole } = require("../../services/role");
const { ctrl } = require("../../utils/controller-wrapper");

exports.remove = ctrl(async (req) => {
  const {
    params: { id },
  } = req;

  const roleId = await removeRole(id);

  return roleId;
});
