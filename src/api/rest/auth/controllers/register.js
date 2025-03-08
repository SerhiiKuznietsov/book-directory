const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { RegisterDTO } = require('../../../../domain/auth/DTO/RegisterDTO');
const { Ctrl } = require('../../common/controller/defaultCtrl');

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
