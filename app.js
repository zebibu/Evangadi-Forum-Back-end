const express = require("express");
const app = express();

const port = 5000;

//db connection

const dbconnection = require("./DB/DbConfig");

// app.get("/", (req, res) => {
//   res.send("welcome");
// });

// user router middleware file
const userRoutes = require("./routes/userRoute");

// json middleware to extract json data
app.use(express.json());

// user routes middleware
app.use("/api/users", userRoutes);

//question router middleware

//answer router middleware

async function start() {
  try {
    const result = await dbconnection.execute("select 'test' ");
    app.listen(port);
    console.log("Database connected and test query executed");
    console.log(`listeinig on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}

start();
