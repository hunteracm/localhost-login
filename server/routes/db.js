const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("/get", (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res, next) => {
  const fname = "Khinshan";
  const lname = "Khan";
  const email = "khinshan.khan@hunteracm.org";
  const empl = 23596244;
  const now = new Date();
  const newUser = new User({ fname, lname, email, empl, now });

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
