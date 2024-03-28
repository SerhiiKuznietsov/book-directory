const { removeRolePolicy } = require("../../services/role-policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.remove = ctrl(async (req) => {
  const {
    params: { uuid },
  } = req;

  const roleId = await removeRolePolicy(uuid);

  return roleId;
});
