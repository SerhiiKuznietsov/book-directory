const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { CreateUserDTO } = require('../../../../domain/user/DTO/CreateUserDTO');
const { Ctrl } = require('../../common/controller/defaultCtrl');

class CreateUserCtrl extends Ctrl {
  handle = async (req, reply) => {
    const { body } = req;

    const createUserDTO = new CreateUserDTO(body);

    const userId = await this.useCase.execute(createUserDTO);

    reply.code(HTTP_CODE.CREATED);

    return { id: userId };
  };
}

module.exports = {
  CreateUserCtrl,
};
