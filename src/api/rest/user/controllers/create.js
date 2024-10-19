const { createUser } = require('../../../../domain/user/useCases/create');

exports.create = async (req, reply) => {
  const { body } = req;

  const userId = await createUser(body);

  reply.code(201).send({ id: userId });
};
