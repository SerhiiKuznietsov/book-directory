const fs = require('node:fs');

exports.createFolderSyncIfNotExsist = (dirPath) => {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
};