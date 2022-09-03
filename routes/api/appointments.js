const express = require('express');
const router = express.Router();
const apptsCtrl = require('../../controllers/api/appointments');

// GET /api/appointments
router.get('/', apptsCtrl.getAll);
// POST /api/appointments
router.post('/', apptsCtrl.create);

module.exports = router;
