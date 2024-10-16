const { createRole } = require('../../services/role');

exports.create = async (req, reply) => {
  const { body } = req;

  const roleId = await createRole(body);

  reply.code(201).send({ id: roleId });
};
