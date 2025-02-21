const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { Ctrl } = require('../../common/controller/defaultCtrl');

class RemoveUserCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      params: { id },
    } = req;

    const userId = await this.useCase.execute(id);

    reply.code(HTTP_CODE.OK);

    return { id: userId };
  };
}

module.exports = {
  RemoveUserCtrl,
};
