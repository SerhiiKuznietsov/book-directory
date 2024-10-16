const { getRolePolicyByUUID } = require('../../services/role-policy');

exports.getSingle = async (req) => {
  const {
    params: { uuid },
  } = req;

  const rolePolicyItem = await getRolePolicyByUUID(uuid);

  return rolePolicyItem;
};
