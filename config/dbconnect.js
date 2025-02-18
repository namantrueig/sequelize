const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb", "postgres", "naman", {
  host: "127.0.0.1",
  dialect: "postgres",
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}



module.exports = { sequelize,testConnection };
