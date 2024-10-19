const { createRole } = require('../../../../domain/role/useCases/create');

exports.create = async (req, reply) => {
  const { body } = req;

  const roleId = await createRole(body);

  reply.code(201).send({ id: roleId });
};
