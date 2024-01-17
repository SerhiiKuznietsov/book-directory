exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Book",
    {
      title: {
        type: DataTypes.STRING(255),
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
      tableName: "book",
    }
  );

  Model.link = function ({ models }) {
    const { User } = models;

    this.belongsToMany(User, { through: "UserBook", foreignKey: "bookId" });
  };

  return Model;
};
