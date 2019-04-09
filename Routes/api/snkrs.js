const express = require("express");

const router = express.Router();

//Snkr Model
const Snkr = require("../../Models/Snkr");

router.get("/", () => {
  Snkr.find().then(snkrs => res.json(snkrs));
});

module.exports = router;
