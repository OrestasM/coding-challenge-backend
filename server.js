const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todo'
});

db.connect((err)=>{
    if(err) throw err;
    
    console.log("Database connected")
})

const app = express();

app.get('/createdb', (req,res)=>{
    let query = "CREATE DATABASE todo";
    db.query(query, (err, result) =>{
        if(err) throw err;
        console.log("Database created");
        res.send("Database created")
    })
})

app.get('/createtable', (req,res)=>{
    let query = "CREATE TABLE todos(id int AUTO_INCREMENT, title VARCHAR(150), body VARCHAR(255), PRIMARY KEY (id));";
    db.query(query, (err, result)=>{
        if(err) throw err;
        console.log("Table created");
        res.sendStatus(200);
    })
})

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log("Server started on port " + app.get('port'));
});

app.get("/", function (req,res){
    res.sendStatus(200);
});
