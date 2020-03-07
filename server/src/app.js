// module dependencies
import compression from "compression";
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const path = require("path");

// env variables
const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const uri = process.env.DB_URI;

// database router
const dbRouter = require("./routes/db");

// instantiate our express application
const app = express();

// connect to our mongodb atlas instance
mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    console.log("MongoDB database connection established successfully!")
  )
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
  });

// express middleware
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());

app.use(
  cors({
    origin: "*",
  })
);

// Mount our db router
app.use("/db", dbRouter);

// error handling
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// more error handling
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
