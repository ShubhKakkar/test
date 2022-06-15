const userController = require('../controllers/user.controller');
const middlewares = require('../middlewares');
module.exports = (app) => {
    app.get('/social_media/api/v1/users', userController.findAllUsers);
    app.get('/social_media/api/v1/users/:id', userController.findSingleUser);
    app.put('/social_media/api/v1/update-users/:id', middlewares.verifyJwt.verifyToken, middlewares.verifyJwt.isAdmin , middlewares.validateUser, userController.updateUser);
    app.delete('/social_media/api/v1/delete-user/', middlewares.verifyJwt.verifyToken, middlewares.verifyJwt.isAdmin , middlewares.deleteIdVerfication, userController.deleteUser);
}