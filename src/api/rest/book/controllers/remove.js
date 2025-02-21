const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { Ctrl } = require('../../common/controller/defaultCtrl');

class RemoveBookCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      params: { id },
    } = req;

    const bookId = await this.useCase.execute(id);

    reply.code(HTTP_CODE.OK);

    return { id: bookId };
  };
}

module.exports = {
  RemoveBookCtrl,
};
