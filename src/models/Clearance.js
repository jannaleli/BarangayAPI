



var mongoose = require('mongoose');

// Setup schema
var clearanceSchema = mongoose.Schema({
  clearance_id: String,
  status: Boolean,
  create_date: Date, 
  approve_date: Date,
  attachment_id: String
});

// Export Contact model
module.exports = mongoose.model('Clearance', attachmentSchema);

