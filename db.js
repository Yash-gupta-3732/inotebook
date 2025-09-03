const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/Notebook";

const connTOMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connTOMongo;
//nodemon use- when you make changes and update something then you dont need to restart the server agaain it will restart by itself