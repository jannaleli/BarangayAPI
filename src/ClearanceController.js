// External Dependancies
const boom = require('boom')

// Get Data Models
const Clearance = require('../models/Clearance')

// Get all cars
exports.getClearance = async (req, reply) => {
  try {
    const clearance = await Clearance.find()
    return clearance
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleClearance = async (req, reply) => {
  try {
    const id = req.params.id
    const clearance = await Clearance.findById(id)
    return clearance
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addClearance = async (req, reply) => {
  try {
    const clearance = new Clearance(req.body)
    return clearance.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updateClearance = async (req, reply) => {
  try {
    const id = req.params.id
    const clearance = req.body
    const { ...updateData } = clearance
    const update = await Clearance.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteClearance = async (req, reply) => {
  try {
    const id = req.params.id
    const clearance = await Clearance.findByIdAndRemove(id)
    return clearance
  } catch (err) {
    throw boom.boomify(err)
  }
}