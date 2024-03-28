const { CustomError } = require("../../utils/error");
const { Role } = require("../../db/sequelize");

exports.getRoleById = async (id) => {
  const foundRole = await Role.findByPk(id, { raw: true });

  if (!foundRole) {
    throw new CustomError(`role with id: "${id}" not found`).setStatus(404);
  }

  return foundRole;
};
