const { createRole } = require("../../services/role");
const { ctrl } = require("../../utils/controller-wrapper");

exports.create = ctrl(async (req) => {
  const { body } = req;

  const id = await createRole(body);

  return id;
});
