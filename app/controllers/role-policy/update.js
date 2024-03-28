const { updateRolePolicy } = require("../../services/role-policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.update = ctrl(async (req, res) => {
  const {
    body,
    params: { uuid },
  } = req;

  const rolePolicyUuid = await updateRolePolicy(uuid, body);

  res.json(rolePolicyUuid);
});
