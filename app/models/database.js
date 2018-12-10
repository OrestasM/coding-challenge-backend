const mysql = require('mysql');
let config = require('config');

// const db = mysql.createConnection({
//     host: 'todolist.cv7zpivicwkt.eu-central-1.rds.amazonaws.com',
//     user: 'root',
//     password: 'rootroot',
//     port: '3306'
// });


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306'
});

console.log(config.util.getEnv('NODE_ENV'))

db.connect((err) => {
    if (err) throw err;
    console.log("Database connected")
})

module.exports = db;