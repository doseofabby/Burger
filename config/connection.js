const mysql = require('mysql');

// const dotenv = require("dotenv").config();

// CONNECT TO THE DATABASE
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Abigail09@",
        database: "burger_db"
    })
}

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connection.js connected as id " + connection.threadId);
});

module.exports = connection;