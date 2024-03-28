exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING(123),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(256),
        unique: true,
      },
      roleId: {
        field: "role_id",
        type: DataTypes.SMALLINT,
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
      tableName: "user",
    }
  );

  Model.link = function ({ models }) {
    const { Role, Book } = models;

    this.belongsTo(Role, { foreignKey: "roleId", as: "role" });

    this.belongsToMany(Book, { through: "UserBook", foreignKey: "userId" });
  };

  return Model;
};
