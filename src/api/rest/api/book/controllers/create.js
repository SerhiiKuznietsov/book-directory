const { HTTP_CODE } = require('../../../../../constants/httpStatus');
const { CreateBookDTO } = require('../../../../../domain/book/DTO/CreateBookDTO');
const { Ctrl } = require('../../../common/controller/defaultCtrl');

class CreateBookCtrl extends Ctrl {
  handle = async (req, reply) => {
    const { body } = req;

    const createBookDTO = new CreateBookDTO(body);

    const bookId = await this.useCase.execute(createBookDTO);

    reply.code(HTTP_CODE.CREATED);

    return { id: bookId };
  };
}

module.exports = {
  CreateBookCtrl,
};
