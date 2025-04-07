'use strict';

const { faker } = require('@faker-js/faker');
const {
  makeRole,
  makeBook,
  makePolicy,
  makeUser,
  makeRolePolicy,
  makeUserBook,
} = require('./interfaces');
const { range } = require('./utils');
const { DEFAULT_PASSWORD, PERMISSIONS } = require('./constants');

const makeAuthors = (roleId, authorsCount, booksInterval) => {
  const authors = [];
  const books = [];
  const authorsBooks = [];

  for (let i = 0; i < authorsCount; i++) {
    const newAuthor = makeUser(
      `${faker.person.firstName()} ${faker.person.lastName()}`,
      faker.internet.email(),
      roleId,
      DEFAULT_PASSWORD
    );

    authors.push(newAuthor);

    const booksCount = range(booksInterval.min, booksInterval.max);
    for (let j = 0; j < booksCount; j++) {
      const newBook = makeBook(
        faker.lorem.words(3),
        faker.lorem.paragraphs(2),
        faker.company.name(),
        faker.date.past({ years: 20 }).toISOString().split('T')[0],
        faker.number.int({ min: 9, max: 1000 })
      );
      const userBook = makeUserBook(newAuthor.id, newBook.id);

      books.push(newBook);
      authorsBooks.push(userBook);
    }
  }

  return [authors, books, authorsBooks];
};

const policyPolicy = makePolicy('POLICY', PERMISSIONS);
const userPolicy = makePolicy('USER', PERMISSIONS);
const rolePolicy = makePolicy('ROLE', PERMISSIONS);
const bookPolicy = makePolicy('BOOK', PERMISSIONS);

const ownerRole = makeRole('owner');
const adminRole = makeRole('admin');
const moderRole = makeRole('moder');
const authorRole = makeRole('author');
const userRole = makeRole('user');

const getRolesPoliciesList = () => {
  return [
    makeRolePolicy(
      ownerRole.id,
      policyPolicy.id,
      Object.values(policyPolicy.permissions)
    ),
    makeRolePolicy(
      ownerRole.id,
      userPolicy.id,
      Object.values(userPolicy.permissions)
    ),
    makeRolePolicy(
      ownerRole.id,
      rolePolicy.id,
      Object.values(rolePolicy.permissions)
    ),
    makeRolePolicy(
      ownerRole.id,
      bookPolicy.id,
      Object.values(bookPolicy.permissions)
    ),
    makeRolePolicy(
      authorRole.id,
      bookPolicy.id,
      Object.values(bookPolicy.permissions)
    ),
    makeRolePolicy(userRole.id, bookPolicy.id, policyPolicy.permissions.READ),
  ];
};

const usersList = [
  makeUser('Owner', 'owner@gmail.com', ownerRole.id, DEFAULT_PASSWORD),
  makeUser('Admin', 'admin@gmail.com', adminRole.id, DEFAULT_PASSWORD),
  makeUser('Moder', 'moder@gmail.com', moderRole.id, DEFAULT_PASSWORD),
  makeUser('User', 'user@gmail.com', userRole.id, DEFAULT_PASSWORD),
];

const booksList = [];
const usersBooksList = [];

exports.getList = () => {
  const [authorsArr, booksArr, authorsBooksArr] = makeAuthors(
    authorRole.id,
    10,
    { min: 1, max: 10 },
    usersList,
    booksList,
    usersBooksList
  );

  usersList.push(...authorsArr);
  booksList.push(...booksArr);
  usersBooksList.push(...authorsBooksArr);

  return {
    rolesList: [ownerRole, adminRole, moderRole, authorRole, userRole],
    policiesList: [policyPolicy, userPolicy, rolePolicy, bookPolicy],
    usersList,
    booksList,
    usersBooksList,
    rolesPoliciesList: getRolesPoliciesList(),
  };
};
