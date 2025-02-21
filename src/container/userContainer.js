const { Container } = require('./container');

const { UserRepository } = require('../repository/sequelize/user');

const { GetUserListUseCase } = require('../domain/user/useCases/list');
const { GetUserByIdUseCase } = require('../domain/user/useCases/getById');
const { CreateUserUseCase } = require('../domain/user/useCases/create');
const { UpdateUserUseCase } = require('../domain/user/useCases/update');
const { RemoveUserUseCase } = require('../domain/user/useCases/remove');

class UserContainer extends Container {
  constructor(db) {
    super();
    this.db = db;
  }

  async initRepositories() {
    this.userRepository = new UserRepository(this.db);
  }

  async initUseCases() {
    const { userRepository } = this;

    this.getUserListUseCase = new GetUserListUseCase(userRepository);
    this.getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
    this.createUserUseCase = new CreateUserUseCase(userRepository);
    this.updateUserUseCase = new UpdateUserUseCase(userRepository);
    this.removeUserUseCase = new RemoveUserUseCase(userRepository);
  }
}

module.exports = { UserContainer };
