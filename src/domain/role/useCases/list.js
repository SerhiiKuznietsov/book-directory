class GetRoleListUseCase {
  constructor(roleRepo) {
    this._roleRepo = roleRepo;
  }

  async execute(q) {
    const rolesList = await this._roleRepo.getList(q);

    return rolesList;
  }
}

module.exports = {
  GetRoleListUseCase,
};
