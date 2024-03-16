const { createInstance } = require("./db");
const { startServer } = require("./server");
// const { initStoragesConnection } = require("./services/storage");

exports.start = async () => {
  // TODO - remove the comment when the storage logic is needed
  // await initStoragesConnection();
  await createInstance();
  startServer();
};
