const authController = require('../controllers/auth.controller');
const middlewares = require('../middlewares');
// Sign Up
const verifyDetails = middlewares.validateSignUp.verifyDetails;
const checkDuplication = middlewares.validateSignUp.checkDuplication;
const checkRoles = middlewares.validateSignUp.checkRoles;
const signUp = authController.signUp;
// Sign In
const validateSignIn = middlewares.validateSignIn;
const signIn = authController.signIn;

module.exports = (app) => {
    app.post('/social_media/api/v1/auth/signup', verifyDetails, checkDuplication, checkRoles, signUp);
    app.post('/social_media/api/v1/auth/signin', validateSignIn, signIn);
}