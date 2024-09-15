const roleProperties = require('../properties');
const { id } = roleProperties;

module.exports = {
  tags: ['role'],
  description: 'Get role by ID',
  summary: 'Fetch role data',
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
      properties: roleProperties,
    },
  },
};
