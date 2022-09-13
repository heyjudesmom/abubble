const express = require('express');
const router = express.Router();
const mealsCtrl = require('../../controllers/api/mealPlans');

// GET /api/meals
router.get('/', mealsCtrl.get);
// POST /api/meals
router.post('/', mealsCtrl.create);

module.exports = router;
