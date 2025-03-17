const { HTTP_CODE } = require('../../../../../constants/httpStatus');
const { Ctrl } = require('../../../common/controller/defaultCtrl');

class RemoveRoleCtrl extends Ctrl {
  handle = async (req, reply) => {
    const {
      params: { id },
    } = req;

    const roleId = await this.useCase.execute(id);

    reply.code(HTTP_CODE.OK);

    return { id: roleId };
  };
}

module.exports = {
  RemoveRoleCtrl,
};
