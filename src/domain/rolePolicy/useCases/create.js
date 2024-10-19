const { CustomError } = require('../../../utils/error');
const { RolePolicy } = require('../../../db/sequelize');
const { ERROR_TYPES } = require('../../../constants/error');

exports.createRolePolicy = async (rolePolicyItem) => {
  // TODO - add a check to compare permissions against those of the original policy
  const { uuid } = await RolePolicy.create(rolePolicyItem);
  if (!uuid) {
    throw new CustomError('role and policy linkage not created', ERROR_TYPES.UNKNOWN_ERROR);
  }

  return uuid;
};
