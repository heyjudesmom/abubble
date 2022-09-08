const express = require('express');
const router = express.Router();
const mealsCtrl = require('../../controllers/api/mealPlans');

// GET /api/meals
// router.get('/', mealsCtrl.getAll);
// POST /api/meals
router.post('/', mealsCtrl.create);
//DELETE /api/meals/:id
// router.delete('/:id', mealsCtrl.delete);

module.exports = router;
