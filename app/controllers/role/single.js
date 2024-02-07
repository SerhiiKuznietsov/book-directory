const { getRoleById } = require("../../services/role");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getSingle = ctrl(async (req) => {
  const {
    params: { id },
  } = req;

  const user = await getRoleById(id);

  return user;
});
