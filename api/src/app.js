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

app.listen(port, () => {
  console.log("connection is set");
});
