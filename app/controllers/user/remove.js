const { ctrl } = require("../../utils/controller-wrapper");
const { removeUser } = require("../../services/user");

exports.remove = ctrl(async (req) => {
  const { id } = req.params;

  const userId = await removeUser(id);

  return userId;
});
