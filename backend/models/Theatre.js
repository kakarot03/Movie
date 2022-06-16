const mongoose = require("mongoose");

const TheatreSchema = new mongoose.Schema(
  {
    theatrename: { type: String, required: true },
    seats: { type: Number, default: 60 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Theatre", TheatreSchema);
