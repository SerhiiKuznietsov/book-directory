const { CustomError } = require('../../utils/error');
const { Policy } = require('../../db/sequelize');
const { getPolicyById } = require('./single');

exports.updatePolicy = async (id, policyItem) => {
  await getPolicyById(id);

  const [isPolicyUpdated] = await Policy.update(policyItem, {
    where: {
      id,
    },
  });

  if (!isPolicyUpdated) {
    throw new CustomError(`policy with id: "${id}" not updated`).setStatus(404);
  }

  return id;
};
