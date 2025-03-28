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
  constructor(userRepo, sessionRepo, userAccessService) {
    this._userRepo = userRepo;
    this._sessionRepo = sessionRepo;
    this._userAccessService = userAccessService;
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

    const user = await this._userRepo.getById(id);
    if (!user) {
      throw new CustomError('Unauthorized', ERROR_TYPES.UNAUTHORIZED);
    }

    const session = await this._sessionRepo.getById(user.id);
    if (session) {
      req.user = session;
      return;
    }

    req.user = await this._userAccessService.makeUserSession(
      user,
      refreshTokenValue
    );
  };
}

class PolicyHook {
  constructor(policyName) {
    this._policyName = policyName;
  }

  custom = (permissionName) => {
    return (req, reply, done) => {
      const { permissions } = req.user || {};
      if (!permissions) {
        throw new CustomError('Unauthorized', ERROR_TYPES.UNAUTHORIZED);
      }

      const policy = permissions[this._policyName];
      if (!policy) {
        throw new CustomError('Unauthorized', ERROR_TYPES.UNAUTHORIZED);
      }

      const isAccess = policy[permissionName];
      if (!isAccess) {
        throw new CustomError('Unauthorized', ERROR_TYPES.UNAUTHORIZED);
      }

      done();
    };
  };
}

module.exports = {
  UserHook,
  PolicyHook,
};
