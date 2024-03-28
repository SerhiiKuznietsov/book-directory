const { createUser } = require("../../services/user");
const { ctrl } = require("../../utils/controller-wrapper");

exports.create = ctrl(async (req, res) => {
  const { body } = req;

  const userId = await createUser(body);

  res.status(201).json(userId);
});
