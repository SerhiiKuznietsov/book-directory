const { CustomError } = require('../../utils/error');
const { Role } = require('../../db/sequelize');

exports.createRole = async (roleItem) => {

  const { id } = await Role.create(roleItem);

  if (!id) {
    throw new CustomError('role not created');
  }

  return id;
};
