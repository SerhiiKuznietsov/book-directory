const { Role } = require('../../common/db/sequelize');

const getList = async (q) => {
  const rolesList = await Role.findAll({
    ...q.pagination,
    ...q.sorting,
    raw: true,
  });

  return rolesList;
};

const getById = async (id) => {
  const foundRole = await Role.findByPk(id, { raw: true });

  return foundRole;
};

const create = async (roleItem) => {
  const { id } = await Role.create(roleItem);

  return id;
};

const update = async (id, roleItem) => {
  const [isRoleUpdated] = await Role.update(roleItem, {
    where: {
      id,
    },
  });
  return isRoleUpdated > 0;
};

const remove = async (id) => {
  const isRoleRemoved = await Role.destroy({
    where: {
      id,
    },
  });

  return isRoleRemoved;
};

module.exports = {
  getList,
  getById,
  create,
  update,
  remove,
};
