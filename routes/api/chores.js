const express = require('express');
const router = express.Router();
const choresCtrl = require('../../controllers/api/chores');

// GET /api/chores
router.get('/', choresCtrl.getAll);
// POST /api/chores
router.post('/', choresCtrl.create);
//DELETE /api/chores/:id
router.delete('/:id', choresCtrl.delete);
//PUT /api/chores/:id/edit
// router.put('/:id/edit') 

module.exports = router;
