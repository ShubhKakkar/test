const authController = require('../controllers/auth.controller');
// const signUpValidator = require('../midllewares/validateSignUp')
module.exports = (app) => {
    app.post('/social_media/api/v1/auth/signin', authController.signIn);
    app.post('/social_media/api/v1/auth/signup',authController.signUp);
}