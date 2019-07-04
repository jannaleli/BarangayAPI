
var mongoose = require('mongoose');

// Setup schema
var complaintSchema = mongoose.Schema({
  complaint_id: String,
  latitude: Double,
  longitude: Double, 
  comp_desc: String,
  category: String
});

module.exports = mongoose.model('Complaint', complaintSchema);


