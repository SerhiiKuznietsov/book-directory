const { getModelPrimaryKeyFieldName } = require("../sequelize-model-methods");
const { CustomError } = require("../../../utils/error");
const {
  NORMAL_GROUPING_NAME,
  ALL_GROUPING_NAME,
} = require("../../../constants/db-query");

exports.enrichOrder = (result, query, queryConfiguration) => {
  const { model, accessFields } = queryConfiguration;
  const { order } = query;
  const newOrder = [];

  if (!order || !order[0]) {
    newOrder.push([getModelPrimaryKeyFieldName(model), NORMAL_GROUPING_NAME]);
  } else {
    newOrder[0] = order[0];

    newOrder[1] = ALL_GROUPING_NAME.includes(order[1])
      ? order[1]
      : NORMAL_GROUPING_NAME;
  }

  // TODO - add field check for table
  if (accessFields && !accessFields.includes(newOrder[0])) {
    throw new CustomError(`no access to the "${newOrder[0]}" field`);
  }

  result.order = [newOrder];
};
