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

exports.makeBook = (title, description, publisher, publishedAt, pageCount) => {
  return {
    id: randomUUID(),
    title,
    description,
    publisher,
    publishedAt,
    pageCount,
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
    roleId,
    policyId,
    accessPermission: accessPermission || [],
  };
};
