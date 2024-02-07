const { createPolicy } = require("../../services/policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.create = ctrl(async (req) => {
  const { body } = req;

  const id = await createPolicy(body);

  return id;
});
