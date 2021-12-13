const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/users")
  .then(() => console.log("Connection Successful...."))
  .catch((err) => console.log(err));
