"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Update extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Update.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Update.init(
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Update",
    }
  );
  return Update;
};
