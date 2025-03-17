const {
  AUTH_API_TAG,
  REFRESH_TOKEN_COOKIE_NAME,
} = require('../../../../../constants/auth');

module.exports = {
  tags: [AUTH_API_TAG],
  cookies: {
    type: 'object',
    required: [REFRESH_TOKEN_COOKIE_NAME],
    additionalProperties: false,
    properties: {
      [REFRESH_TOKEN_COOKIE_NAME]: { type: 'string' },
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      required: ['accessToken', 'refreshToken'],
      properties: {
        accessToken: { type: 'string' },
        refreshToken: { type: 'string' },
      },
    },
  },
};
