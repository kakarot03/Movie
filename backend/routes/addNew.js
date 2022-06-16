const router = require("express").Router();
const Movie = require("../models/Movie");
const Theatre = require("../models/Theatre");
const savedMovie = null;

// Add new Movie
router.post("/movie", async (req, res) => {
  const newMovie = new Movie({
    moviename: req.body.moviename,
    year: req.body.year,
  });

  try {
    savedMovie = await newMovie.save();
    return res.status(201).json(savedMovie);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Add new Theatre
router.post("/theatre", async (req, res) => {
  const newTheatre = new Theatre({
    theatrename: req.body.theatre,
  });
  try {
    savedTheatre = await newTheatre.save();
    return res.status(201).json(savedTheatre);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
