const { updatePolicy } = require('../../services/policy');

exports.update = async (req) => {
  const {
    body,
    params: { id },
  } = req;

  const policyId = await updatePolicy(id, body);

  return policyId;
};
