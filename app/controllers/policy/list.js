const { getPolicesList } = require('../../services/policy');

exports.getList = async (req) => {
  const policesList = await getPolicesList(req.query);

  return policesList;
};
