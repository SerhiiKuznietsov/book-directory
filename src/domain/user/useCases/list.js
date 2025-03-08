class GetUserListUseCase {
  constructor(userRepo) {
    this._userRepo = userRepo;
  }

  async execute(q) {
    const usersList = await this._userRepo.getList(q);

    return usersList;
  }
}

module.exports = {
  GetUserListUseCase,
};
