const { HTTP_CODE } = require('../../../../../constants/httpStatus');
const { Ctrl } = require('../../../common/controller/defaultCtrl');
const { parseQueryParams } = require('../../../common/queryParser');

class GetUserListCtrl extends Ctrl {
  handle = async (req, reply) => {
    const queryParams = parseQueryParams(req.query);

    const usersList = await this.useCase.execute(queryParams);

    reply.code(HTTP_CODE.OK);

    return usersList;
  };
}

module.exports = {
  GetUserListCtrl,
};
