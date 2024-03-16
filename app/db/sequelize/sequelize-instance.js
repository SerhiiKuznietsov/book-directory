const { Sequelize } = require("sequelize");
const {
  db: { development: dbConfig },
} = require("../../config");
const { IS_DEV } = require("../../config/server");

exports.authenticate = async (sequelizeInstance) => {
  try {
    await sequelizeInstance.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (e) {
    new CustomError(
      `Unable to connect to the database: ${db.database}`
    ).setCause(e);
  }
};

exports.createSequelizeInstance = () => {
  const sequelizeInstance = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
      host: dbConfig.host,
      port: dbConfig.port,
      dialect: dbConfig.dialect,
      logging: IS_DEV,
      pool: {
        min: 0,
        max: 10,
      },
      define: {
        underscored: false,
        freezeTableName: false,
        syncOnAssociation: true,
        charset: "utf8",
        timestamps: false,
      },
    }
  );

  return sequelizeInstance;
};
