const { randomUUID } = require('node:crypto');

exports.makeUser = (name, email, roleId, hash) => {
  return {
    id: randomUUID(),
    name,
    email,
    roleId,
    hash,
  };
};

exports.makeRole = (name) => {
  return {
    id: randomUUID(),
    name,
  };
};

exports.makePolicy = (title, permissions) => {
  return {
    id: randomUUID(),
    title,
    permissions,
  };
};

exports.makeBook = (title) => {
  return {
    id: randomUUID(),
    title,
  };
};

exports.makeUserBook = (userId, bookId) => {
  return {
    id: randomUUID(),
    userId,
    bookId,
  };
};

exports.makeRolePolicy = (roleId, policyId, ...accessPermission) => {
  return {
    id: randomUUID(),
    roleId,
    policyId,
    accessPermission,
  };
};