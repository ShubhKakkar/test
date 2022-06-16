const userController = require('../controllers/user.controller');
const middlewares = require('../middlewares');

// Auth
const verifyToken = middlewares.verifyJwt.verifyToken;
const isAdmin = middlewares.verifyJwt.isAdmin;

// User
const validateUser = middlewares.validateUser;
const deleteIdVerification = middlewares.deleteIdVerfication;

module.exports = (app) => {
    app.get('/social_media/api/v1/users', userController.findAllUsers);
    app.get('/social_media/api/v1/users/:id', userController.findSingleUser);
    app.put('/social_media/api/v1/update-user', verifyToken, isAdmin, validateUser, userController.updateUser);
    app.delete('/social_media/api/v1/delete-user/', verifyToken, isAdmin, deleteIdVerification, userController.deleteUser);
}