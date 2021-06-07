const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   userId: String,
   userName:String,
   password:String,
   signedUpOn:Date,

})

// Export the model
const users = mongoose.model('users', userSchema)

module.exports = users