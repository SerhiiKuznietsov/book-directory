const { capitalize } = require('../../../utils/string-converter');

exports.enrichIncludes = (result, nested, nestedModel) => {
  if (!nested || !nestedModel || !Object.keys(nestedModel).length) return;

  const include = [];

  for (const modelName in nested) {
    const attrs = nested[modelName];

    const capitalizeModelName = capitalize(modelName);

    if (!nestedModel.hasOwnProperty(capitalizeModelName)) continue;

    const result = nestedModel[capitalizeModelName];

    if (attrs && attrs.length) {
      result.attributes = attrs;
    }

    include.push(result);
  }

  if (!include.length) return;

  result.include = include;
};
