require('dotenv').config()

const connectionInfo = {
  server: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD
} 


// mysql.connect(connectionInfo);

console.log("=".repeat(40));
console.log(connectionInfo);
console.log("=".repeat(40));
