const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'Mrnd2001',
  database: 'testDatabase'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});