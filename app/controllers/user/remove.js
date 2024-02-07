const { ctrl } = require("../../utils/controller-wrapper");
const { removeUser } = require("../../services/user");

exports.remove = ctrl(async (req) => {
  const {
    params: { id },
  } = req;

  const userId = await removeUser(id);

  return userId;
});
