const { initRest } = require('./rest');

exports.initApi = async (app, container) => {
  await initRest(app, container);
};
