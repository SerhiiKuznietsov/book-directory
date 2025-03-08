class UserRepository {
  constructor(db) {
    this._db = db;
    this._model = this._db.models.User;
  }

  async getList(q) {
    const usersList = await this._model.findAll({
      ...q.pagination,
      ...q.sorting,
      raw: true,
    });

    return usersList;
  }

  async getById(id) {
    const foundUser = await this._model.findByPk(id, { raw: true });

    return foundUser;
  }

  async getByEmail(email) {
    const foundUser = await this._model.findOne({
      where: { email },
      raw: true,
    });

    return foundUser;
  }

  async create(userItem) {
    const newUser = await this._model.create({
      ...userItem,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return newUser;
  }

  async update(id, userItem) {
    const [isUserUpdated] = await this._model.update(
      {
        ...userItem,
        updatedAt: new Date(),
      },
      {
        where: {
          id,
        },
      }
    );

    return isUserUpdated > 0;
  }

  async remove(id) {
    const isUserRemoved = await this._model.destroy({
      where: {
        id,
      },
    });

    return isUserRemoved;
  }
}

module.exports = {
  UserRepository,
};
