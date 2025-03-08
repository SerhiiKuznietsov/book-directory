class GetBookListUseCase {
  constructor(bookRepo) {
    this._bookRepo = bookRepo;
  }

  async execute(q) {
    const booksList = await this._bookRepo.getList(q);

    return booksList;
  }
}

module.exports = {
  GetBookListUseCase,
};
