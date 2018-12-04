const db = require('../models/database');
module.exports = {
    getAll: (req,res) =>{
        let query = 'SELECT * FROM todos';
        db.query(query, (err,todos)=>{
            if(err) throw err;
            res.send(todos);
        })
    },
    postNewToDo: (req,res) =>{
        let query = 'INSERT INTO todos (title, body) VALUES ("'+req.body.title+'","'+req.body.body+'");';
        db.query(query, (err)=>{
            if(err) throw err;
            res.send("Inserted into database");
        })
    },
    getArchived: (req, res) =>{
        let query = "SELECT * FROM todos WHERE status='archived'";
        db.query(query, (err, response)=>{
            if(err) throw err;
            res.send(response)
        })
    },
    getActive: (req, res) =>{
        let query = "SELECT * FROM todos WHERE status='visible'";
        db.query(query, (err, response)=>{
            if(err) throw err;
            res.send(response)
        })
    },
    getSingle: (req, res) =>{
        let query = "SELECT * FROM todos WHERE id="+req.params.id;
        db.query(query, (err, response)=>{
            if(err) throw err;
            res.send(response)
        })
    }
  };