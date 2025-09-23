const mysql2 = require("mysql2");

const dbconnection = mysql2.createPool({
  host: "127.0.0.1",
  port: 8889,
  user: "evangadi-admin",
  password: "123456",
  database: "evangadi-db",
  connectionLimit: 10,
});

// dbconnection.execute("SELECT 'test'", (err, result) => {
//   if (err) {
//     console.log("Connection/Query error:", err.message);
//   } else {
//     console.log("Query result:", result);
//   }
// });

module.exports = dbconnection.promise();
