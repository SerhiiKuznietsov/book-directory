/* eslint-disable no-unused-vars */
const {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME,
} = require('../../../../constants/auth');
const { ERROR_TYPES } = require('../../../../constants/error');
const { CustomError } = require('../../../../utils/error');
const { parseAccessToken } = require('../../../../utils/token/access-token');
const { parseRefreshToken } = require('../../../../utils/token/refresh-token');

class UserHook {
  constructor(userRepository) {
    this._userRepository = userRepository;
  }

  use = async (req) => {
    const {
      cookies: {
        [ACCESS_TOKEN_COOKIE_NAME]: accessTokenValue,
        [REFRESH_TOKEN_COOKIE_NAME]: refreshTokenValue,
      },
    } = req;
    let accessData, refreshData;

    try {
      accessData = parseAccessToken(accessTokenValue);
    } catch (e) {
      accessData = {};
    }

    try {
      refreshData = parseRefreshToken(refreshTokenValue);
    } catch (e) {
      refreshData = {};
    }

    const id = accessData.id || refreshData.id;

    if (!id) {
      throw new CustomError('Unauthorized', ERROR_TYPES.UNAUTHORIZED);
    }

    return;
  };
}

class PolicyHook {
  constructor(policyName) {
    this._policyName = policyName;
  }

  custom = (permissionName) => {
    return (req, reply, done) => {
      const err = new CustomError('Unauthorized', ERROR_TYPES.UNAUTHORIZED);

      if (req.user) {
        throw err;
      }

      const { [this._policyName]: permissions } = req.user.policies;

      if (!permissions) {
        throw err;
      }

      const isAccess = permissions[permissionName];

      if (!isAccess) {
        throw err;
      }

      done();
    };
  };
}

module.exports = {
  UserHook,
  PolicyHook,
};
