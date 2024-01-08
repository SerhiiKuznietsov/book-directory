const { app } = require("./app");
const { PORT } = require("./config/server");

exports.startServer = () => {
  app.listen(PORT, () => {
    console.log(`The server started listening on port: ${PORT}`);
  });
};
