exports.enrichRawOptions = (result, queryConfiguration) => {
  const { raw } = queryConfiguration;

  if (!raw) return;

  result.raw = true;
};