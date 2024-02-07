const { getPolicyById } = require("../../services/policy");
const { ctrl } = require("../../utils/controller-wrapper");

exports.getSingle = ctrl(async (req) => {
  const {
    params: { id },
  } = req;

  const book = await getPolicyById(id);

  return book;
});
