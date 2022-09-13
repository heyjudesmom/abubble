const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    color: {
        type: String, 
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = mongoose.model('Tag', tagSchema);