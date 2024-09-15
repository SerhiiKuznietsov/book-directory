const userProperties = require('../properties');
const { id } = userProperties;

module.exports = {
  tags: ['user'],
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
      properties: userProperties,
    },
  },
};
