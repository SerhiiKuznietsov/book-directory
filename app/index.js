const { createInstance } = require("./models");
const { startServer } = require("./server");

exports.start = async () => {
  await createInstance();
  startServer();
};
