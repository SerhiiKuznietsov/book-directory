const { CustomError } = require("../../../utils/error");
const { modelHasField } = require("../sequelize-model-methods");

exports.enrichAttributes = (result, queryConfiguration) => {
  const { accessFields, model } = queryConfiguration;

  if (!accessFields) return;

  for (let i = 0; i < accessFields.length; i++) {
    const fieldName = accessFields[i];

    if (!modelHasField(fieldName, model)) {
      throw new CustomError(
        `model "${getModelName(model)}" not found field "${fieldName}"`
      ).setStatus(500);
    }
  }

  result.attributes = accessFields;
};
