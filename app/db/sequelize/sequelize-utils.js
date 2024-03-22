exports.transactionWrapper = (cb) => {
  return async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await cb(queryInterface, transaction);
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      console.error(e);
      throw e;
    }
  };
};
