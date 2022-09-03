const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    text: {
        type: String,
        unique: true,
        required: true
    },
    color: {
        type: String, 
    }, 
});

module.exports = mongoose.model('Tag', tagSchema);