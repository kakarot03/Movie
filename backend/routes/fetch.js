const router = require("express").Router();
const Movie = require("../models/Movie");
const Theatre = require("../models/Theatre");

router.get("/getMovie", async (req, res) => {
  try {
    const movie = await Movie.find();
    return res.status(200).json(movie);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.get("/Movie", async (req, res) => {
  let arr = [];
  let name = req.query.movie;
  try {
    const movie = await Movie.find();
    arr = movie.filter((e) => {
      return e.moviename.toLowerCase().startsWith(name.toLowerCase());
    });
    res.status(200).json(arr);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getTheatre", async (req, res) => {
  try {
    const theatre = await Theatre.find();
    return res.status(200).json(theatre);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
