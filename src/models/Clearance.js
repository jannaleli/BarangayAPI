// External Dependancies
const mongoose = require('mongoose')

const clearanceSchema = new mongoose.Schema({
  clearance_id: String,
  status: Boolean,
  create_date: Date, 
  approve_date: Date,
  attachment_id: String
})

module.exports = mongoose.model('Clearance', clearanceSchema)