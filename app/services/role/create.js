const { CustomError } = require("../../utils/error");
const { Role } = require("../../db/sequelize");
const { validRoleCreate } = require("../../validations/role");

exports.createRole = async (roleItem) => {
  validRoleCreate(roleItem);

  const { id } = await Role.create(roleItem);

  if (!id) {
    throw new CustomError("role not created");
  }

  return id;
};
