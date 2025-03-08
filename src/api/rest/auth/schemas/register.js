const { AUTH_API_TAG } = require('../../../../constants/auth');
const {
  name,
  email,
  password,
} = require('../../../../domain/auth/entities/properties');

module.exports = {
  tags: [AUTH_API_TAG],
  body: {
    type: 'object',
    required: ['name', 'email', 'password', 'confirmPassword'],
    additionalProperties: false,
    properties: {
      name,
      email,
      password,
      confirmPassword: password
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        accessToken: { type: 'string' },
        refreshToken: { type: 'string' },
      },
    },
  },
};
