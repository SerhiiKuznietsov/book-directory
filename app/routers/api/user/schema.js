const { MIN_NAME_LENGTH, MAX_NAME_LENGTH } = require('../../../constants/role');

const idProperty = {
  type: 'integer',
  minimum: 1,
};

const userProperties = {
  name: {
    title: 'string',
    minLength: MIN_NAME_LENGTH,
    maxLength: MAX_NAME_LENGTH,
  },
  email: {
    type: 'string',
    format: 'email',
  },
  roleId: {
    type: 'integer',
    minimum: 1,
  },
};

const createUserSchema = {
  body: {
    type: 'object',
    required: ['name', 'email', 'roleId'],
    properties: userProperties,
  },
};

const getUserSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: idProperty,
    },
  },
};

const updateUserSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: idProperty,
    },
  },
  body: {
    type: 'object',
    required: ['name', 'email', 'roleId'],
    properties: userProperties,
  },
};

const removeUserSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: idProperty,
    },
  },
};

module.exports = {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  removeUserSchema,
};
