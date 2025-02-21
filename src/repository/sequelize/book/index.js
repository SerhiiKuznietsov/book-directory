class BookRepository {
  constructor(db) {
    this._db = db;
    this._model = this._db.models.Book;
  }

  async getList(q) {
    const booksList = await this._model.findAll({
      ...q.pagination,
      ...q.sorting,
      raw: true,
    });

    return booksList;
  }

  async getById(id) {
    const foundBook = await this._model.findByPk(id, { raw: true });

    return foundBook;
  }

  async create(bookItem) {
    const newBook = await this._model.create({
      ...bookItem,
      updatedAt: new Date(),
      createdAt: new Date(),
    });

    return newBook;
  }

  async update(id, bookItem) {
    const bookData = await this._model.update(
      {
        ...bookItem,
        updatedAt: new Date(),
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );

    return bookData[1][0];
  }

  async remove(id) {
    const isBookRemoved = await this._model.destroy({
      where: {
        id,
      },
    });

    return isBookRemoved;
  }
}

module.exports = {
  BookRepository,
};
