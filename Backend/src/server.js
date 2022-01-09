const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { databaseConfiguration } = require("./config/db");
const errorHandler = require("./middleware/error.js");
const auth = require("./routes/auth");
const appartment = require("./routes/appartment");
const independent = require("./routes/independent");

// config files
dotenv.config({
  path: path.resolve(".env"),
});

databaseConfiguration();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 5000;


app.use("/api/auth", auth);
app.use("/api/appartments", appartment);
app.use("/api/independents", independent);


app.use(errorHandler);
const server = app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
});
// sudo lsof -i :5000
//kill -9 {PID} to kill if the port is used by another process
