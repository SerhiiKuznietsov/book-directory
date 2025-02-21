const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { CreateRoleDTO } = require('../../../../domain/role/DTO/CreateRoleDTO');
const { Ctrl } = require('../../common/controller/defaultCtrl');

class CreateRoleCtrl extends Ctrl {
  handle = async (req, reply) => {
    const { body } = req;

    const createRoleDTO = new CreateRoleDTO(body);

    const roleId = await this.useCase.execute(createRoleDTO);

    reply.code(HTTP_CODE.CREATED);

    return { id: roleId };
  };
}

module.exports = {
  CreateRoleCtrl,
};
