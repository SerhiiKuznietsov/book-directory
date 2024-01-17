const { updateUser } = require("../../services/user");
const { ctrl } = require("../../utils/controller-wrapper");

exports.update = ctrl(async (req) => {
  const {
    body,
    params: { id },
  } = req;

  const userId = await updateUser(id, body);

  return userId;
});
