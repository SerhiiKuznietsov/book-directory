const { removeRolePolicy } = require('../../services/role-policy');

exports.remove = async (req) => {
  const {
    params: { uuid },
  } = req;

  const rolePolicyUuid = await removeRolePolicy(uuid);

  return rolePolicyUuid;
};
