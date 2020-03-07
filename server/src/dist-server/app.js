"use strict";

var _compression = _interopRequireDefault(require("compression"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// module dependencies
var cookieParser = require("cookie-parser");

var cors = require("cors");

var express = require("express");

var logger = require("morgan");

var helmet = require("helmet");

var mongoose = require("mongoose");

var path = require("path"); // env variables


var dotenv = require("dotenv");

var dotenvExpand = require("dotenv-expand");

var myEnv = dotenv.config();
dotenvExpand(myEnv);
var uri = process.env.DB_URI; // database router

var dbRouter = require("./routes/db"); // instantiate our express application


var app = express(); // connect to our mongodb atlas instance

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(function () {
  return console.log("MongoDB database connection established successfully!");
})["catch"](function (err) {
  console.log("DB Connection Error: ".concat(err.message));
}); // express middleware

app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use((0, _compression["default"])());
app.use(cookieParser());
app.use(cors({
  origin: "*"
})); // Mount our db router

app.use("/db", dbRouter); // error handling

app.use(function (req, res, next) {
  if (path.extname(req.path).length) {
    var err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
}); // more error handling

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
module.exports = app;