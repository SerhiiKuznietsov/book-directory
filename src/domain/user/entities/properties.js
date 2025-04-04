const { MIN_NAME_LENGTH, MAX_NAME_LENGTH, MIN_PASSWORD_LENGTH } = require('../../../constants/user');

module.exports = {
  id: {
    type: 'string',
    format: 'uuid-v4',
  },
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
    type: 'string',
    format: 'uuid-v4',
  },
  password: {
    type: 'string',
    minLength: MIN_PASSWORD_LENGTH,
  },
  createdAt: { type: 'string', format: 'date-time' },
  updatedAt: { type: 'string', format: 'date-time' },
};
