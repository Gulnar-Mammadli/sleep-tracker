const express = require("express");
const app = express();
const User = require("./models/User");
const user = require("./routes/user");
const sleep = require("./routes/sleep");

const port = 8000;
app.listen(port, () => {
  console.log("connected");
});

app.use(express.json());
app.use("/users", user);
app.use("/sleep", sleep);
