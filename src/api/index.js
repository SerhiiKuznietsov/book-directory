const { initRest } = require('./rest');

exports.initApi = (app) => {
  initRest(app);
};
