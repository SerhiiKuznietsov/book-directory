const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { UpdateBookDTO } = require('../../../../domain/book/DTO/UpdateBookDTO');
const { Ctrl } = require('../../common/controller/defaultCtrl');

class UpdateBookCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      body,
      params: { id },
    } = req;

    const updateBookDTO = new UpdateBookDTO(body);

    const bookId = await this.useCase.execute(id, updateBookDTO);

    reply.code(HTTP_CODE.OK);

    return { id: bookId };
  };
}

module.exports = {
  UpdateBookCtrl,
};
