const mongoose = require('mongoose');
const { default: TagsPage } = require('../src/pages/TagsPage/TagsPage');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    color: {
        type: String, 
    }, 
});

module.exports = mongoose.model('Tag', tagSchema);