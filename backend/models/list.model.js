const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema({
    items:[String],
    createdBy: String,
      createdOn:Date,


})

// Export the model
const lists = mongoose.model('lists', listSchema)

module.exports = lists