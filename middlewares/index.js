const validateUser = require('./validateUser');
const validatePost = require('./validatePost');
const validateSignUp = require('./validateSignUp');
const validateSignIn = require('./validateSignIn');

module.exports = {
    validateUser: validateUser,
    validatePost: validatePost,
    validateSignUp: validateSignUp,
    validateSignIn: validateSignIn
}