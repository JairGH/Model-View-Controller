const router = require("express").Router();

const { Fact } = require("../models");
const apiRoutes = require('./api');
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);

router.use("/api", apiRoutes);

module.exports = router;

// /api/users
// /api/fact