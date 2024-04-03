exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    'RolePolicy',
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'role_id',
      },
      policyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'policy_id',
      },
      accessPermission: {
        type: DataTypes.JSONB,
        allowNull: false,
        field: 'access_permission',
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
      tableName: 'role_policy',
    }
  );

  Model.link = function ({ models }) {
    const { Role, Policy } = models;

    this.belongsTo(Role, { foreignKey: 'roleId', as: 'policyRoles' });
    this.belongsTo(Policy, { foreignKey: 'policyId', as: 'policyPolicies' });
  };

  return Model;
};
