const { getRoleById } = require('../../../../domain/role/useCases/getById');

exports.getSingle = async (req) => {
  const {
    params: { id },
  } = req;

  const roleItem = await getRoleById(id);

  return roleItem;
};
