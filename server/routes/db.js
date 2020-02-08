const express = require("express");
const router = express.Router();

// Subrouters
const addRouter = require("./add");
const getRouter = require("./get");

// Mount our subrouters to assemble our database router
router.use("/add", addRouter);
router.use("/get", getRouter);

// Error handling middleware
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// Export our db router, so that it can be used by our main app in app.js
module.exports = router;
