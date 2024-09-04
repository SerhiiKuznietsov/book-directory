const { MIN_NAME_LENGTH, MAX_NAME_LENGTH } = require('../../../constants/role');

const idProperty = {
  type: 'string',
  format: 'uuid-v4',
};

const roleProperties = {
  name: {
    title: 'string',
    minLength: MIN_NAME_LENGTH,
    maxLength: MAX_NAME_LENGTH,
  },
};

const createRoleSchema = {
  body: {
    type: 'object',
    required: ['name'],
    properties: roleProperties,
  },
};

const getRoleSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: idProperty,
    },
  },
};

const updateRoleSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: idProperty,
    },
  },
  body: {
    type: 'object',
    required: ['name'],
    properties: roleProperties,
  },
};

const removeRoleSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: idProperty,
    },
  },
};

module.exports = {
  createRoleSchema,
  getRoleSchema,
  updateRoleSchema,
  removeRoleSchema,
};
