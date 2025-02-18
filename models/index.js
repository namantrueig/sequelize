const { sequelize } = require("../config/dbconnect");
const { User } = require("./usermodel");
const { Post } = require("./postmodel");

// One-to-Many Relationship: User has many Posts
User.hasMany(Post, { foreignKey: "userId", onDelete: "CASCADE" });
Post.belongsTo(User, { foreignKey: "userId" });

module.exports = { User, Post };
