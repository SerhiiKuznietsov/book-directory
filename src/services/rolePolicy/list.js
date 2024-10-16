const { Role, Policy, RolePolicy } = require('../../db/sequelize');
const { SequelizeFindInterface } = require('../db-query');

const rolePolicyInterface = new SequelizeFindInterface(RolePolicy)
  .setDefaultAttrs('id', 'roleId', 'policyId')
  .setNestedModel(Role, 'policyRoles', ['id', 'name'])
  .setNestedModel(Policy, 'policyPolicies', ['id', 'title']);

exports.getRolesPolicesList = async (query) => {
  const q = rolePolicyInterface.getFindQuery(query);

  const policesList = await RolePolicy.findAll(q);

  return policesList;
};
