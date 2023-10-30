const UserController = require('../controllers/user.controller')

module.exports = app => {
    app.get('/api/users', UserController.findAllUsers)
    app.get('/api/users/:id', UserController.findOneSingleUser)
    app.patch('/api/users/:id', UserController.updateExistingUser)
    app.post('/api/users', UserController.createNewUser)
    app.delete('/api/users/:id', UserController.deleteAnExistingUser)
}

// NOTE: The order of these routes matter! If you have a route that uses a wildcard (like :id) before a path with a
// specific name, the wildcard route will always run. Move specific routes to the top to ensure they are followed.