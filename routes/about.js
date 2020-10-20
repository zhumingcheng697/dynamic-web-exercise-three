const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("About Page");
});

router.get("/me", (req, res) => {
  res.send("About Me");
});

router.get("/json", (req, res) => {
  res.send({ date: Date(), randomNumber: Math.random() });
});

module.exports = router;
