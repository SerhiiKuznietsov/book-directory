const { initRest } = require('./rest');

exports.initApi = async (app, controllers) => {
  await initRest(app, controllers);
};
