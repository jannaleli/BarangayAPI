
var mongoose = require('mongoose');

// Setup schema
var userSchema = mongoose.Schema({
  user_id: String,
  firstname: String,
  lastname: String,
  address: String,
  birthdate: Date,
  create_date: Date,
  attachment_id: String
});

// Export Contact model
module.exports = mongoose.model('User', userSchema);


