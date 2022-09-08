const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const choreSchema = new Schema({
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
});

module.exports = mongoose.model('Chore', choreSchema);