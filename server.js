require("dotenv").config();

const connectionInfo = {
  server: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
};

const someApiKey = process.env.SOME_API_KEY;

// mysql.connect(connectionInfo);

console.log("=".repeat(40));
console.log(connectionInfo);
console.log(someApiKey);
console.log("=".repeat(40));
