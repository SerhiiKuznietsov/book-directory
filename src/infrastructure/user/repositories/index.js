const { User } = require('../../common/db/sequelize');

const getList = async (q) => {
  const usersList = await User.findAll({
    ...q.pagination,
    ...q.sorting,
    raw: true,
  });

  return usersList;
};

const getById = async (id) => {
  const foundUser = await User.findByPk(id, { raw: true });

  return foundUser;
};

const create = async (userItem) => {
  const { id } = await User.create(userItem);

  return id;
};

const update = async (id, userItem) => {
  const [isUserUpdated] = await User.update(userItem, {
    where: {
      id,
    },
  });

  return isUserUpdated > 0;
};

const remove = async (id) => {
  const isUserRemoved = await User.destroy({
    where: {
      id,
    },
  });

  return isUserRemoved;
};

module.exports = {
  getList,
  getById,
  create,
  update,
  remove,
};
