const storages = [require('./session')];

exports.initStoragesConnection = async () => {
  await Promise.all(storages.map(({ init }) => init()));
};
