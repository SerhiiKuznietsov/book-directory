const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { createRolePolicy } = require('../../../../domain/rolePolicy/useCases/create');

exports.create = async (req, reply) => {
  const { body } = req;

  const rolePolicyUuid = await createRolePolicy(body);

  reply.code(HTTP_CODE.CREATED).send(rolePolicyUuid);
};
