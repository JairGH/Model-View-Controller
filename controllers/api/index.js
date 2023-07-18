const router = require("express").Router();
const userRoutes = require("./userRoutes");
const userFact = require("./userFact");

router.use("/users", userRoutes);
router.use("/fact", userFact);

module.exports = router;
