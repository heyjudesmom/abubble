const express = require('express');
const router = express.Router();
const apptsCtrl = require('../../controllers/api/appointments');

// GET /api/appointments
router.get('/', apptsCtrl.getAll);
// POST /api/appointments
router.post('/', apptsCtrl.create);
//DELETE /api/appointments/:id
router.delete('/:id', apptsCtrl.delete);

module.exports = router;
