const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.registerEmail,
    password: req.body.registerPassword,
  });

  try {
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.loginEmail,
    });

    if (!user) {
      return res.status(401).json("Wrong Email");
    }

    const originalPassword = user.password;
    const inputPassword = req.body.loginPassword;

    if (originalPassword != inputPassword)
      return res.status(401).json("Wrong Password");

    const { password, ...others } = user._doc;
    return res.status(200).json({ ...others });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
