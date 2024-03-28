const { updateRolePolicy } = require("../../services/role-policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.update = ctrl(async (req) => {
  const {
    body,
    params: { uuid },
  } = req;

  const roleId = await updateRolePolicy(uuid, body);

  return roleId;
});
