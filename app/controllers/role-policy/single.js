const { getRolePolicyByUUID } = require("../../services/role-policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getSingle = ctrl(async (req) => {
  const {
    params: { uuid },
  } = req;

  const rolePolicy = await getRolePolicyByUUID(uuid);

  return rolePolicy;
});
