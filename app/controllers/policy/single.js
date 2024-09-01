const { getPolicyById } = require('../../services/policy');

exports.getSingle = async (req) => {
  const {
    params: { id },
  } = req;

  const policyItem = await getPolicyById(id);

  return policyItem;
};
