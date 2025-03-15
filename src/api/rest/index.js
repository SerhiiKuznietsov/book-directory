const { registerRootErrorHandlers } = require('./common/hooks/rootErrorHandler');
const { registerAppRouters } = require('./routers');
const { registerSwagger } = require('./swagger');
const { registerCookie } = require('./cookie');
const { registerHealth } = require('./health');

exports.initRest = async (app, container) => {
  registerSwagger(app);
  registerCookie(app);
  registerHealth(app);
  registerAppRouters(app, container);

  registerRootErrorHandlers(app);
};
