const { AUTH_API_TAG } = require('../../../../../constants/auth');
const {
  email,
  password,
} = require('../../../../../domain/auth/entities/properties');

module.exports = {
  tags: [AUTH_API_TAG],
  body: {
    type: 'object',
    required: ['email', 'password'],
    additionalProperties: false,
    properties: {
      email,
      password,
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      required: ['accessToken', 'refreshToken'],
      additionalProperties: false,
      properties: {
        accessToken: { type: 'string' },
        refreshToken: { type: 'string' },
      },
    },
  },
};
