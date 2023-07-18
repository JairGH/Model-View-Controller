const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fact extends Model {}

Fact.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 60],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Fact",
  }
);

module.exports = Fact;
