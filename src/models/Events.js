// External Dependancies
const mongoose = require('mongoose')

const ordinanceSchema = new mongoose.Schema({
    event_id: String,
    event_desc: String,
    start_date: Date,
    end_date: Date,
    attachment_id: String


})

module.exports = mongoose.model('Ordinance', ordinanceSchema)