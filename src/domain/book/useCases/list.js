class GetBookListUseCase {
  constructor(bookRepositories) {
    this._bookRepositories = bookRepositories;
  }

  async execute(q) {
    const booksList = await this._bookRepositories.getList(q);

    return booksList;
  }
}

module.exports = {
  GetBookListUseCase,
};
