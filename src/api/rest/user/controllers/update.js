const { updateUser } = require('../../../../domain/user/useCases/update');

exports.update = async (req) => {
  const {
    body,
    params: { id },
  } = req;

  const userId = await updateUser(id, body);

  return { id: userId };
};
