const express = require("express");
const app = express();
const User = require("./models/User");
const user = require("./routes/user");

const port = 8000;
app.listen(port, () => {
  console.log("connected");
});

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.use(express.json());
app.use("/users", user);
