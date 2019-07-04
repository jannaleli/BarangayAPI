



var mongoose = require('mongoose');

// Setup schema
var permitSchema = mongoose.Schema({
  permit_id: String,
  status: Boolean,
  create_date: Date, 
  approve_date: Date,
  attachment_id: String
});

// Export Contact model
module.exports = mongoose.model('Permit', permitSchema);
