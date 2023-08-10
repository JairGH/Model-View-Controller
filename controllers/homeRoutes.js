const { Fact, User } = require("../models");
const router = require("express").Router();
const withAuth = require("../utils/withauth");

router.get("/", async (req, res) => {
  try {
    const factData = await Fact.findAll({
      // * We get all facts from db
    });

    const facts = factData.map((facts) => {
      return facts.get({ plain: true });
      // * Clean data
    });
    console.log(facts);
    res.render("homepage", {
      facts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
