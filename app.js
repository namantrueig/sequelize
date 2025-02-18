const express = require("express");
const  User  = require("./models/usermodel");  // Correct import
const Post = require("./models/postmodel");
const {sequelize,testConnection}=require("./config/dbconnect");
const { Category } = require("./models/category");



const app = express();

testConnection();

// Middleware to parse JSON request body
app.use(express.json());

// POST route to create a user
app.post("/users", async (req, res) => {
  try {
    // Use 'create' method to insert data
    const user = await User.create(req.body);
    res.status(201).json(user);  // Send response with created user
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// sequelize.sync({force:true});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
