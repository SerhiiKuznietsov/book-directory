const { getUserById } = require("../../services/user");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getSingle = ctrl(async (req) => {
  const { id } = req.params;

  const user = await getUserById(id);

  return user;
});
