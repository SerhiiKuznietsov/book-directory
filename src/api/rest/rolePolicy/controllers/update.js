const { updateRolePolicy } = require('../../../../domain/rolePolicy/useCases');

exports.update = async (req) => {
  const {
    body,
    params: { uuid },
  } = req;

  const rolePolicyUuid = await updateRolePolicy(uuid, body);

  return rolePolicyUuid;
};
