const {
  MAX_NAME_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_HASH_LENGTH,
} = require('../../../../constants/user');

exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(MAX_NAME_LENGTH),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(MAX_EMAIL_LENGTH),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      hash: {
        type: DataTypes.STRING(MAX_HASH_LENGTH),
        allowNull: false,
      },
      refreshToken: {
        field: 'refresh_token',
        type: DataTypes.TEXT,
        allowNull: true,
      },
      roleId: {
        field: 'role_id',
        type: DataTypes.UUID,
        allowNull: false,
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
      tableName: 'user',
    }
  );

  Model.link = function ({ models }) {
    const { Role, Book } = models;

    this.belongsTo(Role, { foreignKey: 'roleId', as: 'role' });

    this.belongsToMany(Book, { through: 'UserBook', foreignKey: 'userId' });
  };

  return Model;
};
