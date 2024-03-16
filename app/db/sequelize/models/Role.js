exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Role",
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
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
      tableName: "role",
    }
  );

  Model.link = function ({ models }) {
    const { User, Policy } = models;

    this.hasMany(User, { foreignKey: "roleId" });

    this.belongsToMany(Policy, { through: "RolePolicy", foreignKey: "roleId" });
  };

  return Model;
};
