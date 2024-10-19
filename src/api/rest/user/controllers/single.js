const { getUserById } = require('../../../../domain/user/useCases/getById');

exports.getSingle = async (req) => {
  const {
    params: { id },
  } = req;

  const userItem = await getUserById(id);

  return userItem;
};
