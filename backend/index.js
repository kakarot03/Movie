const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const addRoute = require("./routes/addNew");
const fetchDetails = require("./routes/fetch");
const env = require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/addNew", addRoute);
app.use("/api/fetch", fetchDetails);

app.listen(5000, console.log(`Server running on port 5000..`));
