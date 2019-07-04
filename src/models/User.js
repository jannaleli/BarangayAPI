// External Dependancies
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  user_id: String,
  firstname: String,
  lastname: String,
  address: String,
  birthdate: Date,
  create_date: Date,
  attachment_id: String

})

module.exports = mongoose.model('User', userSchema)