'use strict';

const { Policy, Role, RolePolicy, User, Book, UserBook } = require('../index');
const { sequenceUpdateQuery } = require('../model-queries');
const { transactionWrapper } = require('../sequelize-utils');

const permission = ['read', 'create', 'update', 'delete'];

const addPolicies = async (transaction, queryInterface) => {
  await Policy.bulkCreate(
    [
      {
        id: 1,
        title: 'POLICY',
        permission,
      },
      {
        id: 2,
        title: 'USER',
        permission,
      },
      {
        id: 3,
        title: 'ROLE',
        permission,
      },
      {
        id: 4,
        title: 'BOOK',
        permission,
      },
    ],
    {
      transaction,
    }
  );

  await queryInterface.sequelize.query(sequenceUpdateQuery(Policy), {
    transaction,
  });
};

const addRoles = async (transaction, queryInterface) => {
  await Role.bulkCreate(
    [
      {
        id: 1,
        name: 'owner',
      },
      {
        id: 2,
        name: 'admin',
      },
      {
        id: 3,
        name: 'moder',
      },
      {
        id: 4,
        name: 'author',
      },
      {
        id: 5,
        name: 'user',
      },
    ],
    {
      transaction,
    }
  );

  await queryInterface.sequelize.query(sequenceUpdateQuery(Role), {
    transaction,
  });
};

const addRolesPolicies = async (transaction) => {
  await RolePolicy.bulkCreate(
    [
      {
        roleId: 1,
        policyId: 1,
        accessPermission: permission,
      },
      {
        roleId: 1,
        policyId: 2,
        accessPermission: permission,
      },
      {
        roleId: 1,
        policyId: 3,
        accessPermission: permission,
      },
      {
        roleId: 4,
        policyId: 1,
        accessPermission: permission,
      },
      {
        roleId: 4,
        policyId: 4,
        accessPermission: permission,
      },
      {
        roleId: 4,
        policyId: 5,
        accessPermission: ['read'],
      },
    ],
    {
      transaction,
    }
  );
};

const addUsers = async (transaction, queryInterface) => {
  await User.bulkCreate(
    [
      {
        id: 1,
        name: 'Owner',
        email: 'owner@gmail.com',
        roleId: 1,
      },
      {
        id: 2,
        name: 'Admin',
        email: 'admin@gmail.com',
        roleId: 2,
      },
      {
        id: 3,
        name: 'Moder',
        email: 'moder@gmail.com',
        roleId: 3,
      },
      {
        id: 4,
        name: 'Dale Carnegie',
        email: 'dale_carnegie@gmail.com',
        roleId: 4,
      },
      {
        id: 5,
        name: 'Tod',
        email: 'tod@gmail.com',
        roleId: 5,
      },
      {
        id: 6,
        name: 'John',
        email: 'john@gmail.com',
        roleId: 5,
      },
    ],
    {
      transaction,
    }
  );

  await queryInterface.sequelize.query(sequenceUpdateQuery(User), {
    transaction,
  });
};

const addBooks = async (transaction, queryInterface) => {
  await Book.bulkCreate(
    [
      {
        id: 1,
        title: 'The Adventures of Tom Sawyer',
      },
      {
        id: 2,
        title: 'Test Book',
      },
      {
        id: 3,
        title: 'Clean Code',
      },
    ],
    {
      transaction,
    }
  );

  await queryInterface.sequelize.query(sequenceUpdateQuery(Book), {
    transaction,
  });
};

const addUsersBooks = async (transaction) => {
  await UserBook.bulkCreate(
    [
      {
        bookId: 1,
        userId: 4,
      },
      {
        bookId: 2,
        userId: 4,
      },
      {
        bookId: 3,
        userId: 4,
      },
    ],
    {
      transaction,
    }
  );
};

exports.up = transactionWrapper(async (queryInterface, transaction) => {
  await addPolicies(transaction, queryInterface);
  await addRoles(transaction, queryInterface);
  await addRolesPolicies(transaction);
  await addUsers(transaction, queryInterface);
  await addBooks(transaction, queryInterface);
  await addUsersBooks(transaction);
});

exports.down = transactionWrapper(async (queryInterface, transaction) => {
  await Policy.truncate({ cascade: true, transaction });
  await queryInterface.sequelize.query(sequenceUpdateQuery(Policy), {
    transaction,
  });

  await Role.truncate({ cascade: true, transaction });
  await queryInterface.sequelize.query(sequenceUpdateQuery(Role), {
    transaction,
  });

  await RolePolicy.truncate({ cascade: true, transaction });

  await User.truncate({ cascade: true, transaction });
  await queryInterface.sequelize.query(sequenceUpdateQuery(User), {
    transaction,
  });

  await Book.truncate({ cascade: true, transaction });
  await queryInterface.sequelize.query(sequenceUpdateQuery(Book), {
    transaction,
  });

  await UserBook.truncate({ cascade: true, transaction });
});
