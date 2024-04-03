const { createRolePolicy } = require('../../services/role-policy');
const { ctrl } = require('../../utils/controller-wrapper');

exports.create = ctrl(async (req, res) => {
  const { body } = req;

  const rolePolicyUuid = await createRolePolicy(body);

  res.status(201).json(rolePolicyUuid);
});
