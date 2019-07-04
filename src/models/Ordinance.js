// External Dependancies
const mongoose = require('mongoose')

const ordinanceSchema = new mongoose.Schema({
  ordinance_id: String,
  ordinace_desc: String,
  create_date: Date

})

module.exports = mongoose.model('User', userSchema)