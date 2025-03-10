const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { Ctrl } = require('../../common/controller/defaultCtrl');
const { RegisterDTO } = require('../../../../domain/auth/DTO/RegisterDTO');

class RegisterCtrl extends Ctrl {
  handle = async (req, reply) => {
    const { body } = req;

    const registerDTO = new RegisterDTO(body);

    const id = await this.useCase.execute(registerDTO);

    reply.code(HTTP_CODE.OK);

    return { id };
  };
}

module.exports = {
  RegisterCtrl,
};
