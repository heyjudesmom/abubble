const express = require('express');
const router = express.Router();
const tagsCtrl = require('../../controllers/api/tags');

// GET /api/appointments
router.get('/', tagsCtrl.getAll);
// POST /api/appointments
router.post('/', tagsCtrl.create);

module.exports = router;
