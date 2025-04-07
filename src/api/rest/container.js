const { DIContainer } = require('../../utils/container');
const { AuthControllers } = require('./api/auth/controllers');
const { RefreshTokenCtrl } = require('./api/auth/controllers/refreshToken');
const { RegisterCtrl } = require('./api/auth/controllers/register');
const { SignInCtrl } = require('./api/auth/controllers/signIn');
const { SignOutCtrl } = require('./api/auth/controllers/signOut');
const { BookControllers } = require('./api/book/controllers');
const { CreateBookCtrl } = require('./api/book/controllers/create');
const { GetBookListCtrl } = require('./api/book/controllers/list');
const { RemoveBookCtrl } = require('./api/book/controllers/remove');
const { GetSingleBookCtrl } = require('./api/book/controllers/single');
const { UpdateBookCtrl } = require('./api/book/controllers/update');
const { RoleControllers } = require('./api/role/controllers');
const { CreateRoleCtrl } = require('./api/role/controllers/create');
const { GetRoleListCtrl } = require('./api/role/controllers/list');
const { RemoveRoleCtrl } = require('./api/role/controllers/remove');
const { GetSingleRoleCtrl } = require('./api/role/controllers/single');
const { UpdateRoleCtrl } = require('./api/role/controllers/update');
const { UserControllers } = require('./api/user/controllers');
const { CreateUserCtrl } = require('./api/user/controllers/create');
const { GetUserListCtrl } = require('./api/user/controllers/list');
const { RemoveUserCtrl } = require('./api/user/controllers/remove');
const { GetSingleUserCtrl } = require('./api/user/controllers/single');
const { UpdateUserCtrl } = require('./api/user/controllers/update');
const { UserHook } = require('./common/hooks/auth');

exports.initRestContainer = (container) => {
  const restContainer = new DIContainer();

  restContainer.register(
    'hook.user',
    new UserHook(
      container.get('repo.user'),
      container.get('repo.session'),
      container.get('sc.userAccess')
    )
  );

  restContainer.register(
    'controllers.auth',
    new AuthControllers(
      new SignInCtrl(container.get('uc.signIn')),
      new SignOutCtrl(container.get('uc.signOut')),
      new RegisterCtrl(container.get('uc.registerUser')),
      new RefreshTokenCtrl(container.get('uc.refreshToken'))
    )
  );

  restContainer.register(
    'controllers.book',
    new BookControllers(
      new GetBookListCtrl(container.get('uc.getBookList')),
      new GetSingleBookCtrl(container.get('uc.getBookById')),
      new CreateBookCtrl(container.get('uc.createBook')),
      new UpdateBookCtrl(container.get('uc.updateBook')),
      new RemoveBookCtrl(container.get('uc.removeBook'))
    )
  );

  restContainer.register(
    'controllers.role',
    new RoleControllers(
      new GetRoleListCtrl(container.get('uc.getRoleList')),
      new GetSingleRoleCtrl(container.get('uc.getRoleById')),
      new CreateRoleCtrl(container.get('uc.createRole')),
      new UpdateRoleCtrl(container.get('uc.updateRole')),
      new RemoveRoleCtrl(container.get('uc.removeRole'))
    )
  );

  restContainer.register(
    'controllers.user',
    new UserControllers(
      new GetUserListCtrl(container.get('uc.getUserList')),
      new GetSingleUserCtrl(container.get('uc.getUserById')),
      new CreateUserCtrl(container.get('uc.createUser')),
      new UpdateUserCtrl(container.get('uc.updateUser')),
      new RemoveUserCtrl(container.get('uc.removeUser'))
    )
  );

  return restContainer;
};
