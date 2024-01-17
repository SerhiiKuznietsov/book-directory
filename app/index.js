const { createInstance } = require("./models");
const { startServer } = require("./server");

// TODO add "redis" to app

exports.start = async () => {
  await createInstance();
  startServer();
};
