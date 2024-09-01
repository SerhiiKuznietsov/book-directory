const { removePolicy } = require('../../services/policy');

exports.remove = async (req) => {
  const {
    params: { id },
  } = req;

  const policyId = await removePolicy(id);

  return policyId;
};
