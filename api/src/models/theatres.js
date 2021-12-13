const mongoose = require("mongoose");
const validator = require("validator");
const theatresSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },

  location: {
    type: String,
    required: true,
    minlength: 3,
  },
});
const Theatres = new mongoose.model("Theatres", theatresSchema);
module.exports = Theatres;
