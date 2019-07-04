// External Dependancies
const mongoose = require('mongoose')

const attachmentSchema = new mongoose.Schema({
  attachment_id: String,
  attachment_src: String,
})

module.exports = mongoose.model('Attachment', attachmentSchema)