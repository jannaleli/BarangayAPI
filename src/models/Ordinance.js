


var mongoose = require('mongoose');

// Setup schema
var ordinanceSchema = mongoose.Schema({
  ordinance_id: String,
  ordinace_desc: String,
  create_date: Date
});

// Export Contact model
module.exports = mongoose.model('Ordinance', ordinanceSchema);


