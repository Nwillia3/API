const express = require("express");

const router = express.Router();

//Snkr Model
const Snkr = require("../../Models/Snkr");

// GET ALL Snkrs
router.get("/", (req, res) => {
  Snkr.find().then(snkrs => res.json(snkrs));
});

// GET a snkr by id
router.get("/:id", (req, res) => {
  Snkr.findById(req.params.id).then(snkrs => res.json(snkrs));
});

router.post("/", (req, res) => {
  const newSnkr = new Snkr({
    brand: req.body.brand,
    tech: req.body.tech,
    colorway: req.body.colorway,
    release_date: req.body.release_date,
    name: req.body.name
  });
  newSnkr.save().then(snkr => res.json(snkr));
});

module.exports = router;
