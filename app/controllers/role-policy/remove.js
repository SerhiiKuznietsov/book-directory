const { removeRolePolicy } = require("../../services/role-policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.remove = ctrl(async (req, res) => {
  const {
    params: { uuid },
  } = req;

  const rolePolicyUuid = await removeRolePolicy(uuid);

  res.json(rolePolicyUuid);
});
