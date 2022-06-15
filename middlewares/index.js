const validateUser = require('./validateUser');
const validatePost = require('./validatePost');
const validateSignUp = require('./validateSignUp');
const validateSignIn = require('./validateSignIn');
const deleteIdVerfication = require('./deleteUser');
const verifyJwt = require('./verifyJwt');

module.exports = {
    validateUser: validateUser,
    validatePost: validatePost,
    validateSignUp: validateSignUp,
    validateSignIn: validateSignIn,
    deleteIdVerfication: deleteIdVerfication,
    verifyJwt: verifyJwt
}