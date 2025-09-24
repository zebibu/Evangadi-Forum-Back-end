const mysql2 = require("mysql2");

const dbconnection = mysql2.createPool({
  host: "127.0.0.1",
  port: 8889,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
});

// console.log(process.env.DB_PASSWORD);

// dbconnection.execute("SELECT 'test'", (err, result) => {
//   if (err) {
//     console.log("Connection/Query error:", err.message);
//   } else {
//     console.log("Query result:", result);
//   }
// });

module.exports = dbconnection.promise();
