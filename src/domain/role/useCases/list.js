class GetRoleListUseCase {
  constructor(roleRepositories) {
    this._roleRepositories = roleRepositories;
  }

  async execute(q) {
    const rolesList = await this._roleRepositories.getList(q);

    return rolesList;
  }
}

module.exports = {
  GetRoleListUseCase,
};
