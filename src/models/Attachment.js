


var mongoose = require('mongoose');

// Setup schema
var attachmentSchema = mongoose.Schema({
  attachment_id: String,
  attachment_src: String,
});

// Export Contact model
module.exports = mongoose.model('Attachment', attachmentSchema);


