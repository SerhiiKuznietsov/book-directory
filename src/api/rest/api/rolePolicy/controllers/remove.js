const { removeRolePolicy } = require('../../../../domain/rolePolicy/useCases');

exports.remove = async (req) => {
  const {
    params: { uuid },
  } = req;

  const rolePolicyUuid = await removeRolePolicy(uuid);

  return rolePolicyUuid;
};
