const { Redis } = require('./redis');

const storages = [];

exports.getStorage = (config) => {
  const newStorage = new Redis(config);

  storages.push(newStorage);

  return newStorage;
};

exports.initStorages = async () => {
  const promises = storages.map((storageItem) => storageItem.connect());

  await Promise.all(promises);
};

exports.closeStorages = async () => {
  const promises = storages.map((storageItem) => storageItem.disconnect());

  await Promise.all(promises);
};
