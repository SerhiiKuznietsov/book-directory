const { updateRole } = require("../../services/role");
const { ctrl } = require("../../utils/controller-wrapper");

exports.update = ctrl(async (req) => {
  const {
    body,
    params: { id },
  } = req;

  const roleId = await updateRole(id, body);

  return roleId;
});
