const express = require("express");
const app = express();

const port = 5000;

// app.get("/", (req, res) => {
//   res.send("welcome");
// });

//Registration route

app.post("/api/users/register", (req, res) => {
    res.send("register user")
})

//Login users
app.post("/api/users/login", (req, res) => {
  res.send("login user");
});

//check users

app.get("/api/users/check", (req, res) => {
    res.send("check user")
})

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`listen on ${port}`);
  }
});
