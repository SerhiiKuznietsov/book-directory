const { getDbInstance, getDbModels, createInstance } = require("./sequelize");

exports.getDbInstance = () => getDbInstance();

exports.getDbModels = () => getDbModels();

exports.createInstance = () => createInstance();