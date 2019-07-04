// Import our Controllers
const userController = require('../controllers/UserController')
const permitController = require('../controllers/PermitController')
const clearanceController = require('../controllers/ClearanceController')
const eventController = require('../controllers/EventController')
const ordinanceController = require('../controllers/OrdinanceController')
const complaintController = require('../controllers/ComplaintController')

const routes = [

//User

  {
    method: 'GET',
    url: '/api/user',
    handler: userController.getUser
  },
  {
    method: 'GET',
    url: '/api/user/:id',
    handler: userController.getSingleUser
  },
  {
    method: 'POST',
    url: '/api/user',
    handler: userController.addUser,
    schema: documentation.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/user/:id',
    handler: userController.updateUser
  },
  {
    method: 'DELETE',
    url: '/api/user/:id',
    handler: userController.deleteUser
  },

  //Clearance

  {
    method: 'GET',
    url: '/api/clearance',
    handler: clearanceController.getUser
  },
  {
    method: 'GET',
    url: '/api/clearance/:id',
    handler: clearanceController.getSingleUser
  },
  {
    method: 'POST',
    url: '/api/clearance',
    handler: clearanceController.addUser,
    schema: documentation.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/clearance/:id',
    handler: clearanceController.updateUser
  },
  {
    method: 'DELETE',
    url: '/api/clearance/:id',
    handler: clearanceController.deleteUser
  },

  //Permit  
  {
    method: 'GET',
    url: '/api/clearanceer',
    handler: clearanceController.getUser
  },
  {
    method: 'GET',
    url: '/api/clearance/:id',
    handler: clearanceController.getSingleUser
  },
  {
    method: 'POST',
    url: '/api/clearance',
    handler: clearanceController.addUser,
    schema: documentation.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/clearance/:id',
    handler: clearanceController.updateUser
  },
  {
    method: 'DELETE',
    url: '/api/clearance/:id',
    handler: clearanceController.deleteUser
  },

  //Ordinance
  {
    method: 'GET',
    url: '/api/ordinance',
    handler: ordinanceController.getUser
  },
  {
    method: 'GET',
    url: '/api/ordinance/:id',
    handler: ordinanceController.getSingleUser
  },
  {
    method: 'POST',
    url: '/api/ordinance',
    handler: ordinanceController.addUser,
    schema: documentation.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/ordinance/:id',
    handler: ordinanceController.updateUser
  },
  {
    method: 'DELETE',
    url: '/api/ordinance/:id',
    handler: ordinanceController.deleteUser
  },

  //Permit  
  {
    method: 'GET',
    url: '/api/permit',
    handler: permitController.getUser
  },
  {
    method: 'GET',
    url: '/api/permit/:id',
    handler: permitController.getSingleUser
  },
  {
    method: 'POST',
    url: '/api/permit',
    handler: ordinanceController.addUser,
    schema: permitController.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/permit/:id',
    handler: permitController.updateUser
  },
  {
    method: 'DELETE',
    url: '/api/permit/:id',
    handler: permitController.deleteUser
  },


  //Events
  {
    method: 'GET',
    url: '/api/events',
    handler: eventController.getUser
  },
  {
    method: 'GET',
    url: '/api/events/:id',
    handler: eventController.getSingleUser
  },
  {
    method: 'POST',
    url: '/api/events',
    handler: ordinanceController.addUser,
    schema: eventController.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/events/:id',
    handler: eventController.updateUser
  },
  {
    method: 'DELETE',
    url: '/api/events/:id',
    handler: eventController.deleteUser
  },

  //Complaint

  {
    method: 'GET',
    url: '/api/complaint',
    handler: complaintController.getUser
  },
  {
    method: 'GET',
    url: '/api/complaint/:id',
    handler: complaintController.getSingleUser
  },
  {
    method: 'POST',
    url: '/api/complaint',
    handler: complaintController.addUser,
    schema: complaintController.addCarSchema
  },
  {
    method: 'PUT',
    url: '/api/complaint/:id',
    handler: complaintController.updateUser
  },
  {
    method: 'DELETE',
    url: '/api/complaint/:id',
    handler: complaintController.deleteUser
  }
]

module.exports = routes