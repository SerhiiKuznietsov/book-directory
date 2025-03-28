class RolePolicyRepository {
  constructor(db) {
    this._db = db;
    this._models = this._db.models;
  }

  async getRoleWithPoliciesById(id) {
    const roleWithPolicies = await this._models.Role.findOne({
      where: { id },
      include: {
        model: this._models.Policy,
        through: { attributes: [] },
      },
    });

    return roleWithPolicies ? roleWithPolicies.toJSON() : roleWithPolicies;
  }
}

module.exports = {
  RolePolicyRepository,
};
