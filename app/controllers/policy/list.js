const { getPolicesList } = require("../../services/policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getList = ctrl(async (req) => {
  const policesList = await getPolicesList(req.query);

  return policesList;
});
