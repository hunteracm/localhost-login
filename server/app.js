// module dependencies
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");

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

// a helper function to create our app with configurations and middleware
const configureApp = () => {
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
};

// main function declaration
const bootApp = async () => {
  await configureApp();
};

// main function invocation
bootApp();

module.exports = app;
