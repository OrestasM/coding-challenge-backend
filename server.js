const express = require('express');
const db = require('./app/models/database');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 5000);

app.get('/createdb', (req,res)=>{
    let query = "CREATE DATABASE `todo` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;";
    db.query(query, (err, result) =>{
        if(err) throw err;
        console.log("Database created");
        res.sendStatus(200);
    })
})

app.get('/createtable', (req,res)=>{
    let query = "CREATE TABLE `todo`.`todos`(id int AUTO_INCREMENT, title VARCHAR(150), body VARCHAR(255), status VARCHAR(20) DEFAULT 'visible', PRIMARY KEY (id));";
    db.query(query, (err, result)=>{
        if(err) throw err;
        console.log("Table created");
        res.sendStatus(200);
    })
})

app.listen(app.get('port'), () => {
    console.log("Server started on port " + app.get('port'));
});

app.get("/", function (req,res){
    res.sendStatus(200);
});

app.use('/todo', require('./app/routes/todos'))
