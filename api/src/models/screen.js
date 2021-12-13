const mongoose = require("mongoose");
const validator = require("validator");
const screenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },

  theatre: {
    type: String,
    required: true,
    minlength: 3,
  },
});
const Screen = new mongoose.model("Screen", screenSchema);
module.exports = Screen;
