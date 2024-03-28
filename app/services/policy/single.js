const { CustomError } = require("../../utils/error");
const { Policy } = require("../../db/sequelize");

exports.getPolicyById = async (id) => {
  const foundPolicy = await Policy.findByPk(id, { raw: true });

  if (!foundPolicy) {
    throw new CustomError(`policy with id: "${id}" not found`).setStatus(404);
  }

  return foundPolicy;
};
