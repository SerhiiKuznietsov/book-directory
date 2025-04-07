const { DIContainer } = require('./utils/container');
// DB
const { SequelizeDB } = require('./repository/sequelize/common');
const { Storage } = require('./repository/storage/redis/common');
// REPOSITORY
const { BookRepository } = require('./repository/sequelize/book');
const { RoleRepository } = require('./repository/sequelize/role');
const { UserRepository } = require('./repository/sequelize/user');
const { SessionRepository } = require('./repository/storage/redis/session');
// USE_CASE
const { CreateBookUseCase } = require('./domain/book/useCases/create');
const { GetBookByIdUseCase } = require('./domain/book/useCases/getById');
const { GetBookListUseCase } = require('./domain/book/useCases/list');
const { RemoveBookUseCase } = require('./domain/book/useCases/remove');
const { UpdateBookUseCase } = require('./domain/book/useCases/update');
const { GetRoleListUseCase } = require('./domain/role/useCases/list');
const { GetRoleByIdUseCase } = require('./domain/role/useCases/getById');
const { CreateRoleUseCase } = require('./domain/role/useCases/create');
const { UpdateRoleUseCase } = require('./domain/role/useCases/update');
const { RemoveRoleUseCase } = require('./domain/role/useCases/remove');
const { GetUserListUseCase } = require('./domain/user/useCases/list');
const { GetUserByIdUseCase } = require('./domain/user/useCases/getById');
const { CreateUserUseCase } = require('./domain/user/useCases/create');
const { UpdateUserUseCase } = require('./domain/user/useCases/update');
const { RemoveUserUseCase } = require('./domain/user/useCases/remove');
const { SignInUseCase } = require('./domain/auth/useCases/signIn');
const { SignOutUseCase } = require('./domain/auth/useCases/signOut');
const { RegisterUseCase } = require('./domain/auth/useCases/register');
const { RefreshTokenUseCase } = require('./domain/auth/useCases/refreshToken');
const { RolePolicyRepository } = require('./repository/sequelize/role-policy');
const { UserAccessService } = require('./domain/auth/services/userAccess');

exports.newAppContainer = (logger, dbConfig, storageConfig) => {
  const c = new DIContainer();

  c.register('log', logger);
  c.register('db.sequelize', new SequelizeDB(dbConfig, c.get('log')));
  c.register('db.redis', new Storage(storageConfig, c.get('log')));

  c.register('repo.book', new BookRepository(c.get('db.sequelize')));
  c.register('repo.role', new RoleRepository(c.get('db.sequelize')));
  c.register('repo.user', new UserRepository(c.get('db.sequelize')));
  c.register(
    'repo.rolePolicy',
    new RolePolicyRepository(c.get('db.sequelize'))
  );
  c.register('repo.session', new SessionRepository(c.get('db.redis')));

  c.register(
    'sc.userAccess',
    new UserAccessService(
      c.get('repo.user'),
      c.get('repo.role'),
      c.get('repo.rolePolicy'),
      c.get('repo.session')
    )
  );

  c.register('uc.getBookList', new GetBookListUseCase(c.get('repo.book')));
  c.register('uc.getBookById', new GetBookByIdUseCase(c.get('repo.book')));
  c.register('uc.createBook', new CreateBookUseCase(c.get('repo.book')));
  c.register('uc.updateBook', new UpdateBookUseCase(c.get('repo.book')));
  c.register('uc.removeBook', new RemoveBookUseCase(c.get('repo.book')));

  c.register('uc.getRoleList', new GetRoleListUseCase(c.get('repo.role')));
  c.register('uc.getRoleById', new GetRoleByIdUseCase(c.get('repo.role')));
  c.register('uc.createRole', new CreateRoleUseCase(c.get('repo.role')));
  c.register('uc.updateRole', new UpdateRoleUseCase(c.get('repo.role')));
  c.register('uc.removeRole', new RemoveRoleUseCase(c.get('repo.role')));

  c.register('uc.getUserList', new GetUserListUseCase(c.get('repo.user')));
  c.register('uc.getUserById', new GetUserByIdUseCase(c.get('repo.user')));
  c.register('uc.createUser', new CreateUserUseCase(c.get('repo.user')));
  c.register('uc.updateUser', new UpdateUserUseCase(c.get('repo.user')));
  c.register('uc.removeUser', new RemoveUserUseCase(c.get('repo.user')));

  c.register(
    'uc.signIn',
    new SignInUseCase(c.get('log'), c.get('repo.user'), c.get('sc.userAccess'))
  );
  c.register(
    'uc.signOut',
    new SignOutUseCase(c.get('log'), c.get('repo.user'), c.get('repo.session'))
  );
  c.register(
    'uc.registerUser',
    new RegisterUseCase(c.get('log'), c.get('repo.user'), c.get('repo.role'))
  );
  c.register(
    'uc.refreshToken',
    new RefreshTokenUseCase(c.get('log'), c.get('repo.user'))
  );

  return c;
};
