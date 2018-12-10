const db = require('../models/database');
module.exports = {
    getAll: (req, res) => {
        let query = 'SELECT * FROM `todo`.`todos`';
        db.query(query, (err, list) => {
            if (err) throw err;
            res.send(list);
        })
    },
    postNewToDo: (req, res) => {
        if(req.body.title!=="" && req.body.body!==""){
            let query = 'INSERT INTO `todo`.`todos` (title, body) VALUES ("' + req.body.title + '","' + req.body.body + '");';

            db.query(query, (err) => {
            if (err) throw err;
            res.send("Inserted into database");
            })
        }else{
            res.send("Title and Body fields cannot be empty")
        }
        
    },
    getArchived: (req, res) => {
        let query = "SELECT * FROM `todo`.`todos` WHERE status='archived'";
        db.query(query, (err, response) => {
            if (err) throw err;
            res.send(response)
        })
    },
    getActive: (req, res) => {
        let query = "SELECT * FROM `todo`.`todos` WHERE status='visible'";
        db.query(query, (err, response) => {
            if (err) throw err;
            res.send(response)
        })
    },
    getSingle: (req, res) => {
        let query = "SELECT * FROM `todo`.`todos` WHERE id=" + req.params.id;
        db.query(query, (err, response) => {
            if (err) throw err;
            res.send(response)
        })
    },
    changeToArchived: (req, res) => {
        let query = "UPDATE `todo`.`todos` SET status='archived' WHERE id=" + req.params.id;
        db.query(query, (err, response) => {
            if (err) throw err;
            res.send(response)
        })
    }
};