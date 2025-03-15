exports.registerHealth = (app) => {
  app.route({
    method: 'GET',
    url: '/health',
    handler: async () => ({ status: 'ok' }),
  });
};
