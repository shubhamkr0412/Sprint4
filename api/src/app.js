const express = require("express");
require("./db/conn");
const User = require("./models/user");
const Movies = require("./models/movies");
const Theatres = require("./models/theatres");
const Screen = require("./models/screen");
const Show = require("./models/show");
const Seat = require("./models/seats");
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.post("/users", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/shows", async (req, res) => {
  try {
    const showData = await User.find();
    res.send(showData);
  } catch (e) {
    res.send(e);
  }
});

app.get("/seats", async (req, res) => {
  try {
    const seatData = await Show.find();
    res.send(seatData);
  } catch (e) {
    res.send(e);
  }
});
app.get("/movies", async (req, res) => {
  try {
    const moviesData = await user.find();
    res.send(moviesData);
  } catch (e) {
    res.send(e);
  }
});
app.get("/movies/nearest", async (req, res) => {
  try {
    const nearData = await user.find();
    res.send(nearData);
  } catch (e) {
    res.send(e);
  }
});
app.listen(port, () => {
  console.log("connection is set");
});
