const { createRolePolicy } = require('../../../../domain/rolePolicy/useCases/create');

exports.create = async (req, reply) => {
  const { body } = req;

  const rolePolicyUuid = await createRolePolicy(body);

  reply.code(201).send(rolePolicyUuid);
};
