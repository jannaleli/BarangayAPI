

var mongoose = require('mongoose');

// Setup schema
var eventSchema = mongoose.Schema({
    event_id: {
        type: String,
        required: true
    },
    event_desc: {
        type: String,
        required: true
    },
    start_date: Date,
    end_date: Date,
    attachment_id: String
});

// Export Contact model
module.exports = mongoose.model('Events', eventSchema);

