const { AUTH_API_TAG } = require('../../../../constants/auth');
const { email } = require('../../../../schemas/auth/properties');

module.exports = {
  tags: [AUTH_API_TAG],
  body: {
    type: 'object',
    required: ['email'],
    properties: {
      email,
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
