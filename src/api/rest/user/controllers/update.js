const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { UpdateUserDTO } = require('../../../../domain/user/DTO/UpdateUserDTO');
const { Ctrl } = require('../../common/controller/defaultCtrl');

class UpdateUserCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      body,
      params: { id },
    } = req;

    const updateUserDTO = new UpdateUserDTO(body);

    const userId = await this.useCase.execute(id, updateUserDTO);

    reply.code(HTTP_CODE.OK);

    return { id: userId };
  };
}

module.exports = {
  UpdateUserCtrl,
};
