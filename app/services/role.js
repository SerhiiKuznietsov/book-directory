const { getDbModels } = require("../models");
const { CustomError } = require("../utils/error");
const {
  validRoleCreate,
  validRoleUpdate,
  validRoleRemove,
} = require("../validations/role");
const { SequelizeQueryBuilder } = require("./db-query");

const getRolesList = async (query) => {
  const { Role } = getDbModels();

  const q = new SequelizeQueryBuilder(Role, query)
    .setAccessFields(["id", "name", "createdAt"])
    .activateRaw()
    .getDbQuery();

  const rolesList = await Role.findAll(q);

  return rolesList;
};

const getRoleById = async (id) => {
  const { Role } = getDbModels();

  const foundRole = await Role.findByPk(id, { raw: true });

  if (!foundRole) {
    throw new CustomError(`role with id: "${id}" not found`).setStatus(404);
  }

  return foundRole;
};

const createRole = async (roleItem) => {
  validRoleCreate(roleItem);

  const { Role } = getDbModels();

  const { id } = await Role.create(roleItem);

  if (!id) {
    throw new CustomError("role not created");
  }

  return id;
};

const updateRole = async (id, roleItem) => {
  validRoleUpdate(id, roleItem);

  await getRoleById(id);

  const { Role } = getDbModels();

  const [isRoleUpdated] = await Role.update(roleItem, {
    where: {
      id,
    },
  });

  if (!isRoleUpdated) {
    throw new CustomError(`role with id: "${id}" not updated`).setStatus(404);
  }

  return id;
};

const removeRole = async (id) => {
  validRoleRemove(id);

  await getRoleById(id);

  const { Role } = getDbModels();

  const isRoleRemoved = await Role.destroy({
    where: {
      id,
    },
  });

  if (!isRoleRemoved) {
    throw new CustomError(`role with id: "${id}" not removed`).setStatus(404);
  }

  return id;
};

module.exports = {
  getRolesList,
  getRoleById,
  createRole,
  updateRole,
  removeRole,
};
