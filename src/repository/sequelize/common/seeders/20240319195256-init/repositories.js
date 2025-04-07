'use strict';

const { makeHashPassword } = require('../../../../../utils/hashPassword');
const { TABLE_NAMES } = require('./constants');

exports.addRoles = async (queryInterface, transaction, list) => {
  const query = `
    INSERT INTO ${TABLE_NAMES.ROLE} (id, name)
    VALUES ($1, $2)
  `;

  for (const role of list) {
    await queryInterface.sequelize.query(query, {
      transaction,
      bind: [role.id, role.name],
    });
  }
};

exports.addBooks = async (queryInterface, transaction, list) => {
  const query = `
    INSERT INTO ${TABLE_NAMES.BOOK} (id, title, description, publisher, published_at, page_count)
    VALUES ($1, $2, $3, $4, $5, $6)
  `;

  for (const book of list) {
    await queryInterface.sequelize.query(query, {
      transaction,
      bind: [
        book.id,
        book.title,
        book.description,
        book.publisher,
        book.publishedAt,
        book.pageCount,
      ],
    });
  }
};

exports.addPolicies = async (queryInterface, transaction, list) => {
  const query = `
    INSERT INTO ${TABLE_NAMES.POLICY} (id, title, permission)
    VALUES ($1, $2, $3)
  `;

  for (const policy of list) {
    const permissions = `{${Object.values(policy.permissions).join(',')}}`;
    await queryInterface.sequelize.query(query, {
      transaction,
      bind: [policy.id, policy.title, permissions],
    });
  }
};

exports.addUsers = async (queryInterface, transaction, list) => {
  const query = `
    INSERT INTO ${TABLE_NAMES.USER} (id, name, email, hash, role_id)
    VALUES ($1, $2, $3, $4, $5)
  `;

  for (const user of list) {
    user.hash = await makeHashPassword(user.hash);

    await queryInterface.sequelize.query(query, {
      transaction,
      bind: [user.id, user.name, user.email, user.hash, user.roleId],
    });
  }
};

exports.addRolesPolicies = async (queryInterface, transaction, list) => {
  const query = `
    INSERT INTO ${TABLE_NAMES.ROLE_POLICY} (role_id, policy_id, access_permission)
    VALUES ($1, $2, $3)
  `;

  for (const rolePolicy of list) {
    await queryInterface.sequelize.query(query, {
      transaction,
      bind: [
        rolePolicy.roleId,
        rolePolicy.policyId,
        JSON.stringify(rolePolicy.accessPermission),
      ],
    });
  }
};

exports.addUsersBooks = async (queryInterface, transaction, list) => {
  const query = `
    INSERT INTO ${TABLE_NAMES.USER_BOOK} (id, book_id, user_id)
    VALUES ($1, $2, $3)
  `;

  for (const userBook of list) {
    await queryInterface.sequelize.query(query, {
      transaction,
      bind: [userBook.id, userBook.bookId, userBook.userId],
    });
  }
};

exports.removePolicies = async (queryInterface, transaction) => {
  await queryInterface.sequelize.query(truncateTableQuery(TABLE_NAMES.POLICY), {
    transaction,
  });
};

exports.removeRoles = async (queryInterface, transaction) => {
  await queryInterface.sequelize.query(truncateTableQuery(TABLE_NAMES.ROLE), {
    transaction,
  });
};

exports.removeRolesPolicies = async (queryInterface, transaction) => {
  await queryInterface.sequelize.query(
    truncateTableQuery(TABLE_NAMES.ROLE_POLICY),
    { transaction }
  );
};

exports.removeUsers = async (queryInterface, transaction) => {
  await queryInterface.sequelize.query(truncateTableQuery(TABLE_NAMES.USER), {
    transaction,
  });
};

exports.removeBooks = async (queryInterface, transaction) => {
  await queryInterface.sequelize.query(truncateTableQuery(TABLE_NAMES.BOOK), {
    transaction,
  });
};

exports.removeUsersBooks = async (queryInterface, transaction) => {
  await queryInterface.sequelize.query(
    truncateTableQuery(TABLE_NAMES.USER_BOOK),
    {
      transaction,
    }
  );
};

const truncateTableQuery = (table) =>
  `TRUNCATE TABLE ${table} RESTART IDENTITY CASCADE;`;
