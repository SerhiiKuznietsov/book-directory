const { CustomError } = require('../../../utils/error');
const { UserSession } = require('../entities/userSession');

const convertPoliciesToPermissions = (policies) => {
  const permissions = {};
  for (let i = 0; i < policies.length; i++) {
    const { title, permission } = policies[i];

    const permissionsObject = permission.reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});

    permissions[title] = permissionsObject;
  }
  return permissions;
};

class UserAccessService {
  constructor(userRepo, roleRepo, rolePolicyRepo, sessionRepo) {
    this._userRepo = userRepo;
    this._roleRepo = roleRepo;
    this._rolePolicy = rolePolicyRepo;
    this._sessionRepo = sessionRepo;
  }

  makeUserSession = async (user, refreshToken) => {
    const role = await this._roleRepo.getById(user.roleId);
    if (!role) {
      throw new CustomError('user role not found');
    }

    const rolePolicies = await this._rolePolicy.getRoleWithPoliciesById(
      role.id
    );
    if (!rolePolicies) {
      throw new CustomError('user role not found');
    }

    const permissions = convertPoliciesToPermissions(rolePolicies.Policies);
    const sessionData = new UserSession(user, role, permissions, refreshToken);

    try {
      const isCreated = await this._sessionRepo.create(user.id, sessionData);
      if (!isCreated) {
        throw new CustomError('create session error');
      }

      const isUpdated = await this._userRepo.updateRefreshToken(
        user.id,
        refreshToken
      );
      if (!isUpdated) {
        throw new CustomError('updated session error');
      }

      return sessionData;
    } catch (e) {
      await this._sessionRepo.remove(user.id);
      throw e;
    }
  };
}

module.exports = { UserAccessService };
