const mongoose = require("mongoose");
const validator = require("validator");
const moviesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },

  actors: [String],
  directors: [String],
  languages: [String],
  poster: { type: String, required: true },
});
const Movies = new mongoose.model("Movies", moviesSchema);
module.exports = Movies;
