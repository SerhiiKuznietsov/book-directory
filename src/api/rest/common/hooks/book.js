const { PolicyHook } = require('./auth');
const { BOOK_POLICY_NAME } = require('../../../../constants/policeName');
const {
  READ_PERMISSION_NAME,
  CREATE_PERMISSION_NAME,
  UPDATE_PERMISSION_NAME,
  DELETE_PERMISSION_NAME,
} = require('../../../../constants/permission');

class BookPolicyHook extends PolicyHook {
  constructor() {
    super(BOOK_POLICY_NAME);
    this._read = this.custom(READ_PERMISSION_NAME);
    this._create = this.custom(CREATE_PERMISSION_NAME);
    this._update = this.custom(UPDATE_PERMISSION_NAME);
    this._remove = this.custom(DELETE_PERMISSION_NAME);
  }

  read = () => {
    return this._read;
  };

  create = () => {
    return this._create;
  };

  update = () => {
    return this._update;
  };

  remove = () => {
    return this._remove;
  };
}

module.exports = {
  BookPolicyHook,
};
