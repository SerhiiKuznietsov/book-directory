const { createPolicy } = require('../../services/policy');
const { ctrl } = require('../../utils/controller-wrapper');

exports.create = ctrl(async (req, res) => {
  const { body } = req;

  const policyId = await createPolicy(body);

  res.status(201).json(policyId);
});
