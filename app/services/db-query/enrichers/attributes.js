const { CustomError } = require("../../../utils/error");
const { modelHasField, getModelName } = require("../sequelize-model-methods");

exports.enrichAttributes = (result, attrs, queryConfiguration) => {
  const { defaultAttrs, model } = queryConfiguration;

  if (!attrs || !attrs.length) {
    result.attributes = defaultAttrs;
    return;
  }

  // TODO - move validation to another location
  for (let i = 0; i < attrs.length; i++) {
    const fieldName = attrs[i];

    if (!modelHasField(fieldName, model)) {
      throw new CustomError(
        `model "${getModelName(model)}" not found field "${fieldName}"`
      ).setStatus(500);
    }
  }

  result.attributes = attrs;
};
