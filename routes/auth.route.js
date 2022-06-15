const authController = require('../controllers/auth.controller');
const middlewares = require('../middlewares');
module.exports = (app) => {
    app.post('/social_media/api/v1/auth/signup', middlewares.validateSignUp.verifyDetails, middlewares.validateSignUp.checkDuplication, middlewares.validateSignUp.checkRoles, authController.signUp);
    app.post('/social_media/api/v1/auth/signin', middlewares.validateSignIn, authController.signIn);
}