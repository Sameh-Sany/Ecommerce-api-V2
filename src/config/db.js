const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", true);

exports.connect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed");
    console.log(error);
  }
};
