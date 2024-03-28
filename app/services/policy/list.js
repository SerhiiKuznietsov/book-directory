const { SequelizeFindInterface } = require("../db-query");
const { Policy } = require("../../db/sequelize");

const policyInterface = new SequelizeFindInterface(Policy)
  .setDefaultAttrs("id", "title")
  .activateRaw();

exports.getPolicesList = async (query) => {
  const q = policyInterface.getFindQuery(query);

  const policesList = await Policy.findAll(q);

  return policesList;
};
