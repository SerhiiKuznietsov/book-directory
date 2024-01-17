const { getDbModels } = require("../models");
const { CustomError } = require("../utils/error");

const getRoleById = async (id) => {
  const { Role } = getDbModels();

  const foundRole = await Role.findByPk(id, { raw: true });

  if (!foundRole) {
    throw new CustomError(`role with id: "${id}" not found`).setStatus(404);
  }

  return foundRole;
};

module.exports = {
  getRoleById,
};
