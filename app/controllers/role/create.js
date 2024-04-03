const { createRole } = require('../../services/role');
const { ctrl } = require('../../utils/controller-wrapper');

exports.create = ctrl(async (req, res) => {
  const { body } = req;

  const roleId = await createRole(body);

  res.status(201).json(roleId);
});
