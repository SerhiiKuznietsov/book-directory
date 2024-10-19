const { removeUser } = require('../../../../domain/user/useCases/remove');

exports.remove = async (req) => {
  const {
    params: { id },
  } = req;

  const userId = await removeUser(id);

  return { id: userId };
};
