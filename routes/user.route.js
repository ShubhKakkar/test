const userController = require('../controllers/user.controller');
const userValidator = require('../middlewares');
module.exports = (app) => {
    app.get('/social_media/api/v1/users', userController.findAllUsers);
    app.get('/social_media/api/v1/users/:id', userController.findSingleUser);
    app.put('/social_media/api/v1/update-users/:id', userValidator.validateUser, userController.updateUser);
    app.delete('/social_media/api/v1/delete-users/:id', userController.deleteUser);
}