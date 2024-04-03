const { getUsersList } = require('../../services/user');
const { ctrl } = require('../../utils/controller-wrapper');

exports.getList = ctrl(async (req, res) => {
  const usersList = await getUsersList(req.query);

  res.json(usersList);
});
