const { CustomError } = require('../../utils/error');
const { Policy } = require('../../db/sequelize');

exports.createPolicy = async (policyItem) => {
  const { id } = await Policy.create(policyItem);

  if (!id) {
    throw new CustomError('policy not created');
  }

  return id;
};
