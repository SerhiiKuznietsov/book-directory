const { ROLE_API_TAG } = require('../../../../constants/role');
const { id, name } = require('../../../../domain/role/entities/properties');

module.exports = {
  tags: [ROLE_API_TAG],
  response: {
    200: {
      type: 'array',
      description: 'Successful response',
      items: {
        type: 'object',
        properties: {
          id,
          name,
        },
      },
    },
  },
};
