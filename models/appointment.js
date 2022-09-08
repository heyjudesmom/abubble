const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apptSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    datetime: {
        type: String, 
        required: true,
    }, 
    duration: { 
        type: Number 
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

module.exports = mongoose.model('Appointment', apptSchema);