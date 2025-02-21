class RoleRepository {
  constructor(db) {
    this._db = db;
    this._model = this._db.models.Role;
  }

  async getList(q) {
    const rolesList = await this._model.findAll({
      ...q.pagination,
      ...q.sorting,
      raw: true,
    });

    return rolesList;
  }

  async getById(id) {
    const foundRole = await this._model.findByPk(id, { raw: true });

    return foundRole;
  }

  async create(roleItem) {
    const { id } = await this._model.create({
      ...roleItem,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return id;
  }

  async update(id, roleItem) {
    const [isRoleUpdated] = await this._model.update(
      {
        ...roleItem,
        updatedAt: new Date(),
      },
      {
        where: {
          id,
        },
      }
    );
    return isRoleUpdated > 0;
  }

  async remove(id) {
    const isRoleRemoved = await this._model.destroy({
      where: {
        id,
      },
    });

    return isRoleRemoved;
  }
}

module.exports = {
  RoleRepository,
};
