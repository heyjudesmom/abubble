const MealPlan = require('../../models/mealPlan');

module.exports = {
    get,
    create,
}

async function get(req, res) {
    const plans = await MealPlan.find({
        user: req.user._id, 
    }).sort("-createdAt");
    const plan = plans[0];
    res.json(plan);
}

async function create(req, res) {
    req.body.user = req.user._id;
     const plan = await MealPlan.create(req.body);
    res.json(plan);
}