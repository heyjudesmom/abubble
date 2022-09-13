const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    tags: [{
        type: Schema.Types.ObjectId, 
        ref: 'Tag'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = mongoose.model('Todo', todoSchema);