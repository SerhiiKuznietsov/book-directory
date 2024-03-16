exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "UserBook",
    {
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "book_id",
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
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
      tableName: "user_book",
    }
  );

  return Model;
};
