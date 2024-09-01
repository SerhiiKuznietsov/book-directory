const { createPolicy } = require('../../services/policy');

exports.create = async (req, reply) => {
  const { body } = req;

  const policyId = await createPolicy(body);

  reply.code(201).send(policyId);
};
