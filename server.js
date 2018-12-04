const express = require('express');
const db = require('./app/models/database');
const bodyParser = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/createdb', (req,res)=>{
    let query = "CREATE DATABASE todo";
    db.query(query, (err, result) =>{
        if(err) throw err;
        console.log("Database created");
        res.send("Database created")
    })
})

app.get('/createtable', (req,res)=>{
    let query = "CREATE TABLE todos(id int AUTO_INCREMENT, title VARCHAR(150), body VARCHAR(255), status VARCHAR(20) DEFAULT 'visible', PRIMARY KEY (id));";
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
