const { Role, Policy, RolePolicy } = require("../db/sequelize");
const { CustomError } = require("../utils/error");
const {
  validRolePolicyUpdate,
  validRolePolicyCreate,
  validRolePolicyRemove,
} = require("../validations/role-policy");
const { SequelizeFindInterface } = require("./db-query");

const rolePolicyInterface = new SequelizeFindInterface(RolePolicy)
  .setDefaultAttrs("uuid", "roleId", "policyId")
  .setNestedModel(Role, "policyRoles", ["id", "name"])
  .setNestedModel(Policy, "policyPolicies", ["id", "title"]);

const getRolesPolicesList = async (query) => {
  const q = rolePolicyInterface.getFindQuery(query);

  const policesList = await RolePolicy.findAll(q);

  return policesList;
};

const getRolePolicyByUUID = async (uuid) => {
  const foundRolePolicy = await RolePolicy.findOne({
    where: { uuid },
    include: [
      {
        model: Role,
        as: "policyRoles",
      },
      {
        model: Policy,
        as: "policyPolicies",
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

const createRolePolicy = async (rolePolicyItem) => {
  validRolePolicyCreate(rolePolicyItem);

  // TODO - add a check to compare permissions against those of the original policy
  const { uuid } = await RolePolicy.create(rolePolicyItem);

  if (!uuid) {
    throw new CustomError("role and policy linkage not created");
  }

  return uuid;
};

const updateRolePolicy = async (uuid, rolePolicyItem) => {
  validRolePolicyUpdate(uuid, rolePolicyItem);

  await getRolePolicyByUUID(uuid);

  // TODO - add a check to compare permissions against those of the original policy
  const [isRolePolicyUpdated] = await RolePolicy.update(rolePolicyItem, {
    where: {
      uuid,
    },
  });

  if (!isRolePolicyUpdated) {
    throw new CustomError(
      `role and policy linkage by uuid: "${uuid}" not updated`
    ).setStatus(404);
  }

  return uuid;
};

const removeRolePolicy = async (uuid) => {
  validRolePolicyRemove(uuid);

  await getRolePolicyByUUID(uuid);

  const isRolePolicyRemoved = await RolePolicy.destroy({
    where: {
      uuid,
    },
  });

  if (!isRolePolicyRemoved) {
    throw new CustomError(
      `role and policy linkage by uuid: "${uuid}" not removed`
    ).setStatus(404);
  }

  return uuid;
};

module.exports = {
  getRolesPolicesList,
  getRolePolicyByUUID,
  createRolePolicy,
  updateRolePolicy,
  removeRolePolicy,
};
