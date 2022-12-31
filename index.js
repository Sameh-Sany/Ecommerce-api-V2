// server configuration and setup
const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const db = require("./src/config/db");

// Load environment variables
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(bodyParser.json());

// Load routes
const productsRoutes = require("./src/routes/products");

// Use routes
app.use("/api/products", productsRoutes);

// Start server and connect to database
db.connect();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
