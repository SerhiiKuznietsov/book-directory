'use strict';

const { Policy, Role, RolePolicy, User, Book, UserBook } = require('../index');
const { transactionWrapper } = require('../sequelize-utils');

const permission = ['read', 'create', 'update', 'delete'];

const policiesList = [
  {
    id: '68f8a8cf-331c-4325-a74d-f36d178bd10d',
    title: 'POLICY',
    permission,
  },
  {
    id: '3f3fddf8-10e6-4a52-9249-a9ccbcb28ba3',
    title: 'USER',
    permission,
  },
  {
    id: '8c538b9e-ae8f-47c3-ab07-644c60a04c5c',
    title: 'ROLE',
    permission,
  },
  {
    id: 'd8ba780b-23e6-481e-be1d-471f375d7f11',
    title: 'BOOK',
    permission,
  },
];

const rolesList = [
  {
    id: '4dd9f6f2-ec0f-4359-85de-1333ac905144',
    name: 'owner',
  },
  {
    id: '9531935b-82f1-45e3-96de-c56826de06c5',
    name: 'admin',
  },
  {
    id: '5f8d14fb-30ae-48ca-8f56-cdce9ad64c28',
    name: 'moder',
  },
  {
    id: '02a2c5ea-7830-405f-afd3-cb77ec6473c6',
    name: 'author',
  },
  {
    id: '0bb21fcd-185a-4500-a37d-cd478ef9023b',
    name: 'user',
  },
];

const rolesPoliciesList = [
  {
    id: 'e6d704c2-1451-4726-804f-30d4fec58c6b',
    roleId: '4dd9f6f2-ec0f-4359-85de-1333ac905144',
    policyId: '68f8a8cf-331c-4325-a74d-f36d178bd10d',
    accessPermission: permission,
  },
  {
    id: 'fdf29ca5-aab0-4c60-912f-64091fb07f97',
    roleId: '4dd9f6f2-ec0f-4359-85de-1333ac905144',
    policyId: '3f3fddf8-10e6-4a52-9249-a9ccbcb28ba3',
    accessPermission: permission,
  },
  {
    id: '2a0b4ffa-4ef1-4092-a254-237d08fb0554',
    roleId: '4dd9f6f2-ec0f-4359-85de-1333ac905144',
    policyId: '8c538b9e-ae8f-47c3-ab07-644c60a04c5c',
    accessPermission: permission,
  },
  {
    id: '425e8157-722a-4609-9bfc-d4272dd03890',
    roleId: '02a2c5ea-7830-405f-afd3-cb77ec6473c6',
    policyId: '68f8a8cf-331c-4325-a74d-f36d178bd10d',
    accessPermission: permission,
  },
  {
    id: '97705d74-07a8-4367-bd3d-cc758c83686d',
    roleId: '02a2c5ea-7830-405f-afd3-cb77ec6473c6',
    policyId: 'd8ba780b-23e6-481e-be1d-471f375d7f11',
    accessPermission: permission,
  },
];

const usersList = [
  {
    id: '5548359e-13e6-4ca2-a1ed-49ef4991ee73',
    name: 'Owner',
    email: 'owner@gmail.com',
    roleId: '4dd9f6f2-ec0f-4359-85de-1333ac905144',
  },
  {
    id: 'e9b090ac-8651-45ff-a4e2-1632a17dd572',
    name: 'Admin',
    email: 'admin@gmail.com',
    roleId: '9531935b-82f1-45e3-96de-c56826de06c5',
  },
  {
    id: '1a4b889b-f817-44ff-8c16-623481fc3d30',
    name: 'Moder',
    email: 'moder@gmail.com',
    roleId: '5f8d14fb-30ae-48ca-8f56-cdce9ad64c28',
  },
  {
    id: '5678b957-656c-464b-a0b0-6228d61f0d0d',
    name: 'Dale Carnegie',
    email: 'dale_carnegie@gmail.com',
    roleId: '02a2c5ea-7830-405f-afd3-cb77ec6473c6',
  },
  {
    id: '3758111b-97d2-4995-b13a-e8156f932c5e',
    name: 'Tod',
    email: 'tod@gmail.com',
    roleId: '0bb21fcd-185a-4500-a37d-cd478ef9023b',
  },
  {
    id: 'c05f1d2a-d8b2-42ea-9519-b87680812408',
    name: 'John',
    email: 'john@gmail.com',
    roleId: '0bb21fcd-185a-4500-a37d-cd478ef9023b',
  },
];

const booksList = [
  {
    id: 'ec5a8efe-69c8-40cd-bef7-292f7b0eb48c',
    title: 'The Adventures of Tom Sawyer',
  },
  {
    id: 'e7942e98-95cd-4d79-92c6-a05599bfd7aa',
    title: 'Test Book',
  },
  {
    id: '422c6691-bbae-4a83-9e52-96b2b2b528bd',
    title: 'Clean Code',
  },
];

const usersBooksList = [
  {
    id: 'a18cc2fe-d387-4872-9696-e03b9f64a4fc',
    bookId: 'ec5a8efe-69c8-40cd-bef7-292f7b0eb48c',
    userId: '5678b957-656c-464b-a0b0-6228d61f0d0d',
  },
  {
    id: 'f7d20c59-404d-45f9-b61a-0240b8685b8f',
    bookId: 'e7942e98-95cd-4d79-92c6-a05599bfd7aa',
    userId: '5678b957-656c-464b-a0b0-6228d61f0d0d',
  },
  {
    id: '998d8888-b46b-4177-a6bb-6ea605f33935',
    bookId: '422c6691-bbae-4a83-9e52-96b2b2b528bd',
    userId: '5678b957-656c-464b-a0b0-6228d61f0d0d',
  },
];

const addPolicies = async (transaction) => {
  await Policy.bulkCreate(policiesList, {
    transaction,
  });
};

const addRoles = async (transaction) => {
  await Role.bulkCreate(rolesList, {
    transaction,
  });
};

const addRolesPolicies = async (transaction) => {
  await RolePolicy.bulkCreate(rolesPoliciesList, {
    transaction,
  });
};

const addUsers = async (transaction) => {
  await User.bulkCreate(usersList, {
    transaction,
  });
};

const addBooks = async (transaction) => {
  await Book.bulkCreate(booksList, {
    transaction,
  });
};

const addUsersBooks = async (transaction) => {
  await UserBook.bulkCreate(usersBooksList, {
    transaction,
  });
};

exports.up = transactionWrapper(async ({ transaction }) => {
  await addPolicies(transaction);
  await addRoles(transaction);
  await addRolesPolicies(transaction);

  await addUsers(transaction);
  await addBooks(transaction);
  await addUsersBooks(transaction);
});

exports.down = transactionWrapper(async ({ transaction }) => {
  await Policy.truncate({ cascade: true, transaction });
  await Role.truncate({ cascade: true, transaction });
  await RolePolicy.truncate({ cascade: true, transaction });

  await User.truncate({ cascade: true, transaction });
  await Book.truncate({ cascade: true, transaction });
  await UserBook.truncate({ cascade: true, transaction });
});
