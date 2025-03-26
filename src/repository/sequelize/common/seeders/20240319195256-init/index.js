'use strict';

const {
  addRoles,
  addBooks,
  addPolicies,
  addUsers,
  addRolesPolicies,
  addUsersBooks,
  removeRoles,
  removeBooks,
  removePolicies,
  removeUsers,
  removeRolesPolicies,
  removeUsersBooks,
} = require('./repositories');
const { getList } = require('./data-generator');

exports.up = async ({ queryInterface, transaction }) => {
  const {
    rolesList,
    policiesList,
    rolesPoliciesList,
    usersList,
    booksList,
    usersBooksList,
  } = getList();

  await addRoles(queryInterface, transaction, rolesList);
  await addPolicies(queryInterface, transaction, policiesList);
  await addRolesPolicies(queryInterface, transaction, rolesPoliciesList);

  await addUsers(queryInterface, transaction, usersList);
  await addBooks(queryInterface, transaction, booksList);
  await addUsersBooks(queryInterface, transaction, usersBooksList);
};

exports.down = async ({ queryInterface, transaction }) => {
  await removeRoles(queryInterface, transaction);
  await removeBooks(queryInterface, transaction);
  await removePolicies(queryInterface, transaction);
  await removeUsers(queryInterface, transaction);
  await removeRolesPolicies(queryInterface, transaction);
  await removeUsersBooks(queryInterface, transaction);
};
