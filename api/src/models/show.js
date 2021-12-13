const mongoose = require("mongoose");
const validator = require("validator");
const showSchema = new mongoose.Schema({
  timing: {
    type: Number,
    required: true,
    minlength: 3,
  },

  movies: {
    type: String,
    required: true,
  },
  totalseats: {
    type: Number,
    required: true,
  },
  screen: {
    type: Number,
    required: true,
  },
});
const Show = new mongoose.model("Show", showSchema);
module.exports = Show;
