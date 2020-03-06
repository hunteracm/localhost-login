const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

const { today } = require("../utils/misc");

router.get("/get", (req, res, next) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res, next) => {
  const findRelevantFields = (stored, current) => {
    if (req.body[current] !== "") {
      return { ...stored, [current]: req.body[current] };
    } else {
      return stored;
    }
  };
  const check_in_fields = Object.keys(req.body).reduce(findRelevantFields, {});

  User.findOne(check_in_fields, (err, oldUser) => {
    if (err) {
      return next(err);
    }

    if (!oldUser) {
      if (Object.keys(check_in_fields).length === 4) {
        const dates = [today()];
        const newUser = new User({ ...check_in_fields, dates });
        newUser
          .save()
          .then(() => res.status(200).json("User added!"))
          .catch(err => res.status(400).json("Error: " + err));
      } else {
        return res.send();
      }
    }

    oldUser.dates.push(today());

    oldUser
      .save()
      .then(() => res.status(200).json("User added!"))
      .catch(err => res.status(400).json("Error: " + err));

    return res.send();
  });
});

// Error handling middleware
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our db router, so that it can be used by our main app in app.js
module.exports = router;
