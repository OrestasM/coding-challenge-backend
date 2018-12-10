const express = require('express');
const router = express.Router();
const todos = require('../controllers/todos');

router.route('/')
    .get(todos.getAll);

router.route('/add')
    .post(todos.postNewToDo);

router.route('/archived')
    .get(todos.getArchived);

router.route('/active')
    .get(todos.getActive);

router.route('/:id')
    .get(todos.getSingle);

router.route('/:id')
    .put(todos.changeToArchived);

// router.route('/todos/')
//     .put(todos.sendToArchive);

// router.route('/todos/')

module.exports = router;