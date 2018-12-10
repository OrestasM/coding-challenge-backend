const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'todolist.cv7zpivicwkt.eu-central-1.rds.amazonaws.com',
    user: 'root',
    password: 'rootroot',
    port: '3306'
});

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected")
})

module.exports = db;