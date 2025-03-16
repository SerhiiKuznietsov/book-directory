const fs = require('node:fs');

exports.createFolderSyncIfNotExist = (dirPath) => {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
};
