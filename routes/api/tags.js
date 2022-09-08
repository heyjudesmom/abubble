const express = require('express');
const router = express.Router();
const tagsCtrl = require('../../controllers/api/tags');

// GET /api/tags
router.get('/', tagsCtrl.getAll);
// POST /api/tags
router.post('/', tagsCtrl.create);
//DELETE /api/tags/:id
router.delete('/:id', tagsCtrl.delete);

module.exports = router;
