const { getRolePolicyByUUID } = require('../../../../domain/rolePolicy/useCases');

exports.getSingle = async (req) => {
  const {
    params: { uuid },
  } = req;

  const rolePolicyItem = await getRolePolicyByUUID(uuid);

  return rolePolicyItem;
};
