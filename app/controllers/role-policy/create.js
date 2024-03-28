const { createRolePolicy } = require("../../services/role-policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.create = ctrl(async (req) => {
  const { body } = req;

  const id = await createRolePolicy(body);

  return id;
});
