const { getRoleById } = require("../../services/role");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getSingle = ctrl(async (req, res) => {
  const {
    params: { id },
  } = req;

  const roleItem = await getRoleById(id);

  res.json(roleItem);
});
