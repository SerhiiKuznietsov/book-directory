const { ctrl } = require('../../utils/controller-wrapper');
const { removeUser } = require('../../services/user');

exports.remove = ctrl(async (req, res) => {
  const {
    params: { id },
  } = req;

  const userId = await removeUser(id);

  res.json(userId);
});
