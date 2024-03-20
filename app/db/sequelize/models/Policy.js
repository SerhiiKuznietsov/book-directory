exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Policy",
    {
      title: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      permission: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      createdAt: {
        type: "TIMESTAMP WITHOUT TIME ZONE",
        allowNull: false,
        defaultValue: sequelize.fn("NOW"),
        field: "created_at",
      },
      updatedAt: {
        type: "TIMESTAMP WITHOUT TIME ZONE",
        allowNull: false,
        defaultValue: sequelize.fn("NOW"),
        field: "updated_at",
      },
    },
    {
      tableName: "policy",
    }
  );

  Model.link = function ({ models }) {
    const { Role } = models;

    this.belongsToMany(Role, { through: "RolePolicy", foreignKey: "policyId" });
  };

  return Model;
};
