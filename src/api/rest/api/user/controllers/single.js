const { HTTP_CODE } = require('../../../../../constants/httpStatus');
const { Ctrl } = require('../../../common/controller/defaultCtrl');

class GetSingleUserCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      params: { id },
    } = req;

    const userItem = await this.useCase.execute(id);

    reply.code(HTTP_CODE.OK);

    return userItem;
  };
}

module.exports = {
  GetSingleUserCtrl,
};
