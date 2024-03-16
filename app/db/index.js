const { getDbInstance, createInstance } = require("./sequelize");

exports.getDbInstance = () => getDbInstance();

exports.getDbModels = () => getDbInstance().models;

exports.createInstance = () => createInstance();