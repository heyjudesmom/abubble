const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/todos');

// GET /api/todos
router.get('/', todosCtrl.getAll);
// POST /api/todos
router.post('/', todosCtrl.create);
//DELETE /api/todos/:id
router.delete('/:id', todosCtrl.delete);

module.exports = router;
