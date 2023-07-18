const router = require("express").Router();
const { Fact } = require("../../models");

router.post("/meh", (req, res) => {
  Fact.create({
    title: req.body.title,
    text: req.body.text,
  })
    .then((newFact) => {
      res.json(newFact);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: "Internal Server Error" });
    });
});





module.exports = router;