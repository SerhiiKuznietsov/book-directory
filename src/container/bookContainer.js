const { Container } = require('./container');

const { BookRepository } = require('../repository/sequelize/book');

const { GetBookListUseCase } = require('../domain/book/useCases/list');
const { GetBookByIdUseCase } = require('../domain/book/useCases/getById');
const { CreateBookUseCase } = require('../domain/book/useCases/create');
const { UpdateBookUseCase } = require('../domain/book/useCases/update');
const { RemoveBookUseCase } = require('../domain/book/useCases/remove');

class BookContainer extends Container {
  constructor(db) {
    super();
    this.db = db;
  }

  async initRepositories() {
    this.bookRepository = new BookRepository(this.db);
  }

  async initUseCases() {
    const { bookRepository } = this;

    this.getBookListUseCase = new GetBookListUseCase(bookRepository);
    this.getBookByIdUseCase = new GetBookByIdUseCase(bookRepository);
    this.createBookUseCase = new CreateBookUseCase(bookRepository);
    this.updateBookUseCase = new UpdateBookUseCase(bookRepository);
    this.removeBookUseCase = new RemoveBookUseCase(bookRepository);
  }
}

module.exports = { BookContainer };
