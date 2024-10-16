const { Role, Policy, RolePolicy } = require('../../db/sequelize');
const { CustomError } = require('../../utils/error');

exports.getRolePolicyByUUID = async (uuid) => {
  const foundRolePolicy = await RolePolicy.findOne({
    where: { uuid },
    include: [
      {
        model: Role,
        as: 'policyRoles',
      },
      {
        model: Policy,
        as: 'policyPolicies',
      },
    ],
  });

  if (!foundRolePolicy) {
    throw new CustomError(
      `role and policy linkage by uuid "${uuid}" not found`
    ).setStatus(404);
  }

  return foundRolePolicy.toJSON();
};
