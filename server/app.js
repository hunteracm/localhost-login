const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const dotenv = require("dotenv");
const dotenvExpand = require("dotenv-expand");

const myEnv = dotenv.config();
dotenvExpand(myEnv);

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-eprga.gcp.mongodb.net/test?retryWrites=true&w=majority`;

const addRouter = require("./routes/add");
const getRouter = require("./routes/get");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/add", addRouter);
app.use("/get", addRouter);

module.exports = app;
