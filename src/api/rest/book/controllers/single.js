const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { Ctrl } = require('../../common/controller/defaultCtrl');

class GetSingleBookCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      params: { id },
    } = req;

    const bookItem = await this.useCase.execute(id);

    reply.code(HTTP_CODE.OK);

    return bookItem;
  };
}

module.exports = {
  GetSingleBookCtrl,
};
