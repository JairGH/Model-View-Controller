const router = require("express").Router;

const facts = [
  {
    title: "Test",
    text: "Test post render",
  },
  {
    title: "Tes2",
    text: "Render this text",
  },
];

router.get("/", async (req, res) => {
  res.render("homepage", { facts });
});

module.exports = router;
