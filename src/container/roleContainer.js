const { Container } = require('./container');

const { RoleRepository } = require('../repository/sequelize/role');

const { GetRoleListUseCase } = require('../domain/role/useCases/list');
const { GetRoleByIdUseCase } = require('../domain/role/useCases/getById');
const { CreateRoleUseCase } = require('../domain/role/useCases/create');
const { UpdateRoleUseCase } = require('../domain/role/useCases/update');
const { RemoveRoleUseCase } = require('../domain/role/useCases/remove');

class RoleContainer extends Container {
  constructor(db) {
    super();
    this.db = db;
  }

  async initRepositories() {
    this.roleRepository = new RoleRepository(this.db);
  }

  async initUseCases() {
    const { roleRepository } = this;

    this.getRoleListUseCase = new GetRoleListUseCase(roleRepository);
    this.getRoleByIdUseCase = new GetRoleByIdUseCase(roleRepository);
    this.createRoleUseCase = new CreateRoleUseCase(roleRepository);
    this.updateRoleUseCase = new UpdateRoleUseCase(roleRepository);
    this.removeRoleUseCase = new RemoveRoleUseCase(roleRepository);
  }
}

module.exports = { RoleContainer };
