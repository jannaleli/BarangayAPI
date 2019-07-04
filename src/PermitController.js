// External Dependancies
const boom = require('boom')

// Get Data Models
const Permit = require('../models/Permit')

// Get all cars
exports.getPermit = async (req, reply) => {
  try {
    const permit = await Permit.find()
    return permit
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSinglePermit = async (req, reply) => {
  try {
    const id = req.params.id
    const permit = await Permit.findById(id)
    return permit
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addPermit = async (req, reply) => {
  try {
    const permit = new Permit(req.body)
    return permit.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updatePermit = async (req, reply) => {
  try {
    const id = req.params.id
    const permit = req.body
    const { ...updateData } = permit
    const update = await Permit.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deletePermit = async (req, reply) => {
  try {
    const id = req.params.id
    const permit = await Permit.findByIdAndRemove(id)
    return permit
  } catch (err) {
    throw boom.boomify(err)
  }
}