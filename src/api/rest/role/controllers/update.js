const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { UpdateRoleDTO } = require('../../../../domain/role/DTO/UpdateRoleDTO');
const { Ctrl } = require('../../common/controller/defaultCtrl');

class UpdateRoleCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      body,
      params: { id },
    } = req;

    const updateRoleDTO = new UpdateRoleDTO(body);

    const roleId = await this.useCase.execute(id, updateRoleDTO);

    reply.code(HTTP_CODE.OK);

    return { id: roleId };
  };
}

module.exports = {
  UpdateRoleCtrl,
};
