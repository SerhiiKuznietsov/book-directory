const { HTTP_CODE } = require('../../../../constants/httpStatus');
const { Ctrl } = require('../../common/controller/defaultCtrl');

class RefreshTokenCtrl extends Ctrl {
  handle = async (req, reply) => {
    await this.useCase.execute();

    reply.code(HTTP_CODE.OK);

    return { ok: true };
  };
}

module.exports = {
  RefreshTokenCtrl,
};
