const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbconnect");

const User = sequelize.define("User", {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true, // Automatically increment the id value
//   },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true, // Prevent Sequelize from pluralizing the table name
  tableName:"Users",
});

module.exports = { User };
