// const router = require('express').Router();

// // const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes')

// router.use('/', homeRoutes)
// // router.use('/api', apiRoutes);

// module.exports = router;
const express = require("express");
const router = express.Router();

// Assuming `homeRoutes` is an object with middleware functions
const homeRoutes = require("./homeRoutes");

// Make sure `homeRoutes` contains a middleware function
if (typeof homeRoutes === "function") {
  router.use("/", homeRoutes);
} else {
  console.error("homeRoutes should be a middleware function");
}

module.exports = router;
