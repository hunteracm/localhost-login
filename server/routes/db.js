const express = require("express");
const router = express.Router();

router.get("/get", (req, res, next) => {
  res.send("respond with get");
});

router.post("/add", (req, res, next) => {
  res.send("respond with add");
});

// Error handling middleware
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our db router, so that it can be used by our main app in app.js
module.exports = router;
