const { DataTypes } = require('sequelize');

const modelsBootstrap = [
  require('./Book'),
  require('./Policy'),
  require('./Role-Policy'),
  require('./Role'),
  require('./UserBook'),
  require('./User'),
];

const initLinks = (sequelizeInstance) => {
  const { models } = sequelizeInstance;

  for (const modelKey in models) {
    const modelItem = models[modelKey];

    if (!modelItem.hasOwnProperty('link')) continue;

    modelItem.link(sequelizeInstance);
  }
};

exports.initModels = (sequelizeInstance) => {
  const links = [];

  modelsBootstrap.forEach(({ init }) => {
    const model = init(sequelizeInstance, DataTypes);

    if (!model.hasOwnProperty('link')) return;

    links.push(model);
  });

  initLinks(sequelizeInstance);
};
