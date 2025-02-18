const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnect");

const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  freezeTableName: true,
  tableName: "Categories",
});

module.exports = { Category };
