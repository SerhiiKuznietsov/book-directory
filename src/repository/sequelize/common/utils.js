const { level } = require('../../../config/logger');
const { newLogger } = require('../../../utils/logger');

const logger = newLogger(level);

exports.transactionWrapper = (cb) => {
  return async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await cb({ queryInterface, transaction });
      await transaction.commit();
    } catch (e) {
      await transaction.rollback();
      logger.error(e, 'transaction wrapper error');
      throw e;
    }
  };
};
