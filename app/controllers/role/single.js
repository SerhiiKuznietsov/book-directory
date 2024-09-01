const { getRoleById } = require('../../services/role');

exports.getSingle = async (req) => {
  const {
    params: { id },
  } = req;

  const roleItem = await getRoleById(id);

  return roleItem;
};
