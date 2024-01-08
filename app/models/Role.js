exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define(
    "Role",
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      tableName: "role",
    }
  );

  Model.link = function () {
    const { User } = sequelize.models;

    this.hasMany(User, {});
  };

  return Model;
};
