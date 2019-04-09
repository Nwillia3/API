const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SnkrSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  release_date: {
    type: Date
  },
  tech: {
    type: String,
    required: true
  },
  colorway: {
    type: [String], // array of strings
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

module.exports = Snkr = mongoose.model("snkr", SnkrSchema);
