// External Dependancies
const boom = require('boom')

// Get Data Models
const Ordinance = require('../models/Ordinance')

// Get all cars
exports.getOrdinance = async (req, reply) => {
  try {
    const ordinance = await Ordinance.find()
    return ordinance
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleOrdinance = async (req, reply) => {
  try {
    const id = req.params.id
    const ordinance = await Ordinance.findById(id)
    return ordinance
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addOrdinance = async (req, reply) => {
  try {
    const ordinance = new Ordinance(req.body)
    return ordinance.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updateOrdinance = async (req, reply) => {
  try {
    const id = req.params.id
    const ordinance = req.body
    const { ...updateData } = ordinance
    const update = await Ordinance.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteOrdinance = async (req, reply) => {
  try {
    const id = req.params.id
    const ordinance = await Ordinance.findByIdAndRemove(id)
    return ordinance
  } catch (err) {
    throw boom.boomify(err)
  }
}