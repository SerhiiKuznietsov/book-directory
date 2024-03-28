const { getPolicyById } = require("../../services/policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getSingle = ctrl(async (req, res) => {
  const {
    params: { id },
  } = req;

  const policyItem = await getPolicyById(id);

  res.json(policyItem);
});
