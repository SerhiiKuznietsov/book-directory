const { createInstance } = require("./models");
const { startServer } = require("./server");
const { initStoragesConnection } = require("./services/storage");

exports.start = async () => {
  await initStoragesConnection();
  await createInstance();
  startServer();
};
