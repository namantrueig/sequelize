const { sequelize } = require("./config/dbconnect");
const { User, Post } = require("./models");

async function test() {
  try {
    // sequelize.sync({force:true});
    // Create a user with id = 1 if not already present
    let user = await User.findByPk(1);
    if (!user) {
      user = await User.create({ name: "John Doe", email: "johndoe@example.com", password: "password123" });
    }
    console.log("user details",user)
    // Now create a post for this user
    const post = await Post.create({
      title: "My second  Post",
      content: "This is the content of my second post.",
      userId: user.id, // Set the userId to the created user's id
    });

    console.log("Post created successfully:", post);
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

test();
