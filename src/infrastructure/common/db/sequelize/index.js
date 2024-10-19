const {
  authenticate,
  createSequelizeInstance,
} = require('./instance');
const { initModels } = require('./models');

const sequelizeInstance = createSequelizeInstance();

initModels(sequelizeInstance);
authenticate(sequelizeInstance);

module.exports = {
  sequelizeInstance,
  ...sequelizeInstance.models,
};
