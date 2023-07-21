const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fact_id: {
      type: DataTypes.INTEGER,
      references: {
          model: "Fact",
          key: "id"
      },
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
    modelName: "comment",
  }
);

module.exports = Comment;
