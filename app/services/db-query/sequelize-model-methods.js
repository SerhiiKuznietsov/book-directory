// put this file in the database module
exports.getModelName = (model) => model.name;

exports.getModelPrimaryKeyFieldName = (model) => model.primaryKeyAttribute;

exports.getModelAttributes = (model) => model.rawAttributes;

exports.modelHasField = (fieldName, model) => exports.getModelAttributes(model).hasOwnProperty(fieldName);