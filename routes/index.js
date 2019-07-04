// Import our Controllers
const userController = require('../controllers/UserController')

const routes = [
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
  }
]

module.exports = routes