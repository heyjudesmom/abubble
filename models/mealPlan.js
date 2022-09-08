const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealPlanSchema = new Schema({
    sun: {
        type: String,
    },
    mon: {
        type: String,
    },
    tue: {
        type: String,
    },
    wed: {
        type: String,
    },
    thu: {
        type: String,
    },
    fri: {
        type: String,
    },
    sat: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = mongoose.model('MealPlan', mealPlanSchema);