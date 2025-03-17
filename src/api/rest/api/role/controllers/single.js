const { HTTP_CODE } = require('../../../../../constants/httpStatus');
const { Ctrl } = require('../../../common/controller/defaultCtrl');

class GetSingleRoleCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      params: { id },
    } = req;

    const roleItem = await this.useCase.execute(id);

    reply.code(HTTP_CODE.OK);

    return roleItem;
  };
}

module.exports = {
  GetSingleRoleCtrl,
};
