const { sequelize } = require("./config/dbconnect");
const { User, Post } = require("./models");


//Managed transactions: Sequelize will automatically rollback the transaction if any error is thrown, or commit the transaction otherwise
//very useful if you use this for inserting inconsistent data 
//ATOMICITY IS MAINTAINED - EITHER ALL OR NONE AT ALL



const createUsersWithPostsManaged = async () => {
    try {
      await sequelize.transaction(async (t) => {
        // Bulk create users
        const users = await User.bulkCreate(
          [
            { name: "anuj", email: "chae@example.com",password:"123" },
            { name: "sachin", email: "dd@example.com",password:"123" },
            { name: "vikas", email: "did@example.com"  }
          ],
          { transaction: t, returning: true } // `returning: true` needed for PostgreSQL
        );
  
        // Extract user IDs
        const anujId = users[0].id;
        const sachinId = users[1].id;
        const bikasId=users[2].id;
  
        // Bulk create posts associated with users
        await Post.bulkCreate(
          [
            { title: "Anuj Post", content: "Hey there!", userId: anujId },
            { title: "sachin Post", content: "What's up?", userId: sachinId },
            { title: "vikas Post", content: "What's up?", userId: bikasId },
          ],
          { transaction: t }
        );
  
        console.log("Users and posts created successfully!");
      }); // Transaction is committed automatically if no errors occur
    } catch (error) {
      console.error("Transaction failed:", error);
      // Rollback happens automatically in case of an error
    }
  };
  
  // Call function
  createUsersWithPostsManaged();
  