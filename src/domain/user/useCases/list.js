class GetUserListUseCase {
  constructor(userRepositories) {
    this._userRepositories = userRepositories;
  }

  async execute(q) {
    const usersList = await this._userRepositories.getList(q);

    return usersList;
  }
}

module.exports = {
  GetUserListUseCase,
};
