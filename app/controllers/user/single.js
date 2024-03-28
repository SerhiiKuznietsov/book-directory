const { getUserById } = require("../../services/user");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getSingle = ctrl(async (req, res) => {
  const {
    params: { id },
  } = req;

  const userItem = await getUserById(id);

  res.json(userItem);
});
