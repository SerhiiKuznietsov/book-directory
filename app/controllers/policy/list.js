const { getPolicesList } = require('../../services/policy');
const { ctrl } = require('../../utils/controller-wrapper');

exports.getList = ctrl(async (req, res) => {
  const policesList = await getPolicesList(req.query);

  res.json(policesList);
});
