// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import contact controller
var userController = require('./UserController');

// Contact routes
router.route('/user')
    .get(userController.index)
    .post(userController.new);

router.route('/user/:contact_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

// Export API routes
module.exports = router;