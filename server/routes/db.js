const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

const { today } = require("../utils/misc");

router.get("/get", (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.post("/addNew", (req, res, next) => {
  console.log(req.body);
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const empl = req.body.empl;
  const dates = [today()];

  console.log("Destructured:");
  console.log(fname, lname, email, empl, dates);

  const newUser = new User({ fname, lname, email, empl, dates });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// Error handling middleware
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our db router, so that it can be used by our main app in app.js
module.exports = router;
