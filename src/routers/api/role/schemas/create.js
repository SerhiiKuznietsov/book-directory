const { ROLE_API_TAG } = require('../../../../constants/role');
const { id, name } = require('../../../../schemas/role/properties');

module.exports = {
  tags: [ROLE_API_TAG],
  body: {
    type: 'object',
    required: ['name'],
    properties: {
      name,
    },
  },
  response: {
    201: {
      description: 'Successful response',
      type: 'object',
      properties: { id },
    },
  },
};
