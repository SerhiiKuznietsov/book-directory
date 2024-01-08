exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define("Policy", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    permission: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  }, {
    tableName: 'policy'
  });

  return Model;
};
