const mongoose = require('mongoose');

// create a schema
const userSchema = new mongoose.Schema({
  username: { type : String , unique : true, required : true },
  password: String,
  gender: String
});

module.exports = mongoose.model('Users', userSchema);