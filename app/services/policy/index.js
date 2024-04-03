const { getPolicesList } = require('./list');
const { getPolicyById } = require('./single');
const { createPolicy } = require('./create');
const { updatePolicy } = require('./update');
const { removePolicy } = require('./remove');

module.exports = {
  getPolicesList,
  getPolicyById,
  createPolicy,
  updatePolicy,
  removePolicy,
};
