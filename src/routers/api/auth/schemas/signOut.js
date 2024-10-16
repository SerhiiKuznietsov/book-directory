const { AUTH_API_TAG } = require('../../../../constants/auth');

module.exports = {
  tags: [AUTH_API_TAG],
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        ok: { type: 'boolean' },
      },
    },
  },
};
