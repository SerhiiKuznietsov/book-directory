exports.init = (sequelize, DataTypes) => {
  const Model = sequelize.define('User', {
    name: {
      type: DataTypes.STRING(123),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(256)
    },
    roleId: {
      field: 'role_id',
      type: DataTypes.SMALLINT
    }
  },
  {
    tableName: "user",
  });

  return Model;
};
