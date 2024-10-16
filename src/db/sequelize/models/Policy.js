const { MAX_TITLE_LENGTH } = require('../../../constants/policy');

exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'Policy',
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
      permission: {
        type: DataTypes.ARRAY(DataTypes.STRING),
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
      tableName: 'policy',
    }
  );

  Model.link = function ({ models }) {
    const { Role, RolePolicy } = models;

    this.belongsToMany(Role, { through: RolePolicy, foreignKey: 'policyId' });
  };

  return Model;
};
