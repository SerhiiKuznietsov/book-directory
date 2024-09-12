const { CustomError } = require('../../utils/error');
const { Policy } = require('../../db/sequelize');
const { getPolicyById } = require('./single');

exports.removePolicy = async (id) => {
  await getPolicyById(id);

  const isPolicyRemoved = await Policy.destroy({
    where: {
      id,
    },
  });

  if (!isPolicyRemoved) {
    throw new CustomError(`policy with id: "${id}" not removed`).setStatus(404);
  }

  return id;
};
