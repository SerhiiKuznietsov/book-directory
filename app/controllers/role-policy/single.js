const { getRolePolicyByUUID } = require('../../services/role-policy');
const { ctrl } = require('../../utils/controller-wrapper');

exports.getSingle = ctrl(async (req, res) => {
  const {
    params: { uuid },
  } = req;

  const rolePolicyItem = await getRolePolicyByUUID(uuid);

  res.json(rolePolicyItem);
});
