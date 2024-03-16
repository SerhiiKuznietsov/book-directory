const { DataTypes } = require("sequelize");
const modelsBootstrap = require("./models");

const initLinks = (sequelize) => {
  const { models } = sequelize;

  Object.keys(models).forEach((modelName) => {
    if (models[modelName].hasOwnProperty("link")) {
      models[modelName].link(sequelize);
    }
  });
};

exports.initModels = (sequelize) => {
  const links = [];

  modelsBootstrap.forEach(({ init }) => {
    const model = init(sequelize, DataTypes);

    if (!model.hasOwnProperty("link")) return;

    links.push(model);
  });

  initLinks(sequelize);
};