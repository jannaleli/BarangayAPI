// External Dependancies
const boom = require('boom')

// Get Data Models
const Event = require('../models/Event')

// Get all cars
exports.getEvent = async (req, reply) => {
  try {
    const events = await Event.find()
    return events
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single car by ID
exports.getSingleEvent = async (req, reply) => {
  try {
    const id = req.params.id
    const events = await Event.findById(id)
    return events
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new car
exports.addEvent = async (req, reply) => {
  try {
    const events = new Event(req.body)
    return events.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing car
exports.updateEvent = async (req, reply) => {
  try {
    const id = req.params.id
    const events = req.body
    const { ...updateData } = events
    const update = await Event.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a car
exports.deleteEvent = async (req, reply) => {
  try {
    const id = req.params.id
    const events = await Event.findByIdAndRemove(id)
    return events
  } catch (err) {
    throw boom.boomify(err)
  }
}