const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    moviename: { type: String, required: true },
    year: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
