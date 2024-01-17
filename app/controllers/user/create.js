const { createUser } = require("../../services/user");
const { ctrl } = require("../../utils/controller-wrapper");

exports.create = ctrl(async (req) => {
  const { body } = req;

  const id = await createUser(body);

  return id;
});
