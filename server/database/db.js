const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: '',
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

module.exports = connection;