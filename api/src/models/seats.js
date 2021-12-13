const mongoose = require("mongoose");
const validator = require("validator");
const seatSchema = new mongoose.Schema({
  seats: {
    type: Number,
    required: true,
  },
});
const Seat = new mongoose.model("Seat", seatSchema);
module.exports = Seat;
