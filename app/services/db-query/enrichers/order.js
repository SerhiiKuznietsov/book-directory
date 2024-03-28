const { getModelPrimaryKeyFieldName } = require("../sequelize-model-methods");
const { CustomError } = require("../../../utils/error");
const {
  NORMAL_GROUPING_NAME,
  ALL_GROUPING_NAME,
} = require("../../../constants/db-query");

exports.enrichOrder = (result, order, model) => {
  let newOrder = [];

  if (!order || !order[0]) {
    const primaryKey = getModelPrimaryKeyFieldName(model);

    if (!primaryKey) return;

    newOrder = [primaryKey, NORMAL_GROUPING_NAME];
  } else {
    newOrder[0] = order[0];

    newOrder[1] = ALL_GROUPING_NAME.includes(order[1])
      ? order[1]
      : NORMAL_GROUPING_NAME;
  }

  result.order = [newOrder];
};
