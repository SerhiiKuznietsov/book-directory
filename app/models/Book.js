exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'book'
  });

  return Model;
};
