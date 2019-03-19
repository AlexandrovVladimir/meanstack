const mongoose = require('mongoose');

// create a schema
const noticesSchema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String
});

module.exports = mongoose.model('Notices', noticesSchema);