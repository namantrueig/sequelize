const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbconnect');
const {User} = require('./usermodel');

const Post = sequelize.define('Post', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' } },
});

// Post.belongsTo(User, { foreignKey: 'userId' });



module.exports = {Post};