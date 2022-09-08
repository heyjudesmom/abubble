const MealPlan = require('../../models/mealPlan');

module.exports = {
    // getAll,
    create,
    // delete: deletePlan,
}

// async function getAll(req, res) {
//     const plans = await MealPlan.find({
//         user: req.user._id
//     });
//     res.json(plans);
// }

async function create(req, res) {
    req.body.user = req.user._id;
     const plan = await MealPlan.create(req.body);
    res.json(plan);
}

// async function deletePlan(req, res, next) {
//     try {
//         const deletedPlan = await Plan.findOneAndDelete({'_id': req.params.id, 'user': req.user._id});
//         res.json(deletedPlan);
//     } catch (err) {
//         return next(err);
//     }
// }
