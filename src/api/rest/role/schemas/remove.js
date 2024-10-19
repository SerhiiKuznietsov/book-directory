const { ROLE_API_TAG } = require('../../../../constants/role');
const { id } = require('../../../../domain/role/entities/properties');

module.exports = {
  tags: [ROLE_API_TAG],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id,
    },
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: { id },
    },
  },
};
