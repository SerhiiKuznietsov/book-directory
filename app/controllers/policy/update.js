const { updatePolicy } = require("../../services/policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.update = ctrl(async (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  const policyId = await updatePolicy(id, body);

  res.json(policyId);
});
