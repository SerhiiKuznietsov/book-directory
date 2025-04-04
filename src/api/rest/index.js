const {
  registerRootErrorHandlers,
} = require('./common/hooks/rootErrorHandler');
const { registerAppRouters } = require('./routers');
const { registerSwagger } = require('./swagger');
const { registerCookie } = require('./cookie');
const { registerHealth } = require('./health');
const { initRestContainer } = require('./container');

exports.initRest = async (app, container) => {
  const restContainer = initRestContainer(container);

  registerSwagger(app);
  registerCookie(app);
  registerHealth(app);
  registerAppRouters(app, restContainer);

  registerRootErrorHandlers(app, container.get('log'));
};
