// External Dependancies
const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema({
  complaint_id: String,
  latitude: Double,
  longitude: Double, 
  comp_desc: String,
  category: String
})

module.exports = mongoose.model('Complaint', complaintSchema)