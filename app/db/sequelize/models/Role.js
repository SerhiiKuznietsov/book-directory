const { MAX_NAME_LENGTH } = require('../../../constants/role');

exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Role',
    {
      name: {
        type: DataTypes.STRING(MAX_NAME_LENGTH),
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
      tableName: 'role',
    }
  );

  Model.link = function ({ models }) {
    const { User, Policy, RolePolicy } = models;

    this.hasMany(User, { foreignKey: 'roleId' });
    this.belongsToMany(Policy, { through: RolePolicy, foreignKey: 'roleId' });
  };

  return Model;
};
