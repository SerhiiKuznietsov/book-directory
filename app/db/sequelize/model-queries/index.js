exports.sequenceUpdateQuery = (
  { tableName, _schema: schemaName },
  seqName = `${tableName}_id_seq`
) => {
  return `SELECT setval('${schemaName}.${seqName}', (SELECT COALESCE(MAX(id), 0) + 1 FROM ${schemaName}.${tableName}));`;
};
