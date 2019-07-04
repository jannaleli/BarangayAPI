// External Dependancies
const boom = require('boom')

// Get Data Models
const Complaint = require('../models/Complaint')

// Get all cars
exports.getComplaint= async (req, reply) => {
  try {
    const complaints = await Complaint.find()
    return complaints
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleComplaint = async (req, reply) => {
  try {
    const id = req.params.id
    const complaints = await Complaint.findById(id)
    return complaints
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addComplaint = async (req, reply) => {
  try {
    const complaints = new Complaint(req.body)
    return complaints.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updateComplaint = async (req, reply) => {
  try {
    const id = req.params.id
    const complaints = req.body
    const { ...updateData } = complaints
    const update = await Event.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteComplaint = async (req, reply) => {
  try {
    const id = req.params.id
    const complaints = await Complaint.findByIdAndRemove(id)
    return complaints
  } catch (err) {
    throw boom.boomify(err)
  }
}