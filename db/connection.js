const mysql = require('mysql');
const util = require('util');

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "R3ydeTigres!",
  database: "employee_tracker"
});



connection.query = util.promisify(connection.query);

module.exports = connection;

///nothing else here