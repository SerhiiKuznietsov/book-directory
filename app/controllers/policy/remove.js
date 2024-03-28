const { ctrl } = require("../../utils/controller-wrapper");
const { removePolicy } = require("../../services/policy");

exports.remove = ctrl(async (req, res) => {
  const {
    params: { id },
  } = req;

  const policyId = await removePolicy(id);

  res.json(policyId);
});
