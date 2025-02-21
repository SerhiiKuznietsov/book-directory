const { MAX_TITLE_LENGTH } = require('../../../../constants/book');

exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Book',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(MAX_TITLE_LENGTH),
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: 'TIMESTAMP WITHOUT TIME ZONE',
        allowNull: false,
        defaultValue: sequelize.fn('NOW'),
        field: 'created_at',
      },
      updatedAt: {
        type: 'TIMESTAMP WITHOUT TIME ZONE',
        allowNull: false,
        defaultValue: sequelize.fn('NOW'),
        field: 'updated_at',
      },
    },
    {
      tableName: 'book',
    }
  );

  Model.link = function ({ models }) {
    const { User } = models;

    this.belongsToMany(User, { through: 'UserBook', foreignKey: 'bookId' });
  };

  return Model;
};
