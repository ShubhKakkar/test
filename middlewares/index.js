// auth
const validateSignUp = require('./authMiddlewares/validateSignUp');
const validateSignIn = require('./authMiddlewares/validateSignIn');
const verifyJwt = require('./authMiddlewares/verifyJwt');
// user
const validateUser = require('./userMiddlewares/validateUser');
const deleteIdVerfication = require('./userMiddlewares/deleteUser');
// post
const validatePost = require('./postMiddlewares/validatePost');
const deletePost = require('./postMiddlewares/deletePost');

module.exports = {
    // auth
    validateSignUp: validateSignUp,
    validateSignIn: validateSignIn,
    verifyJwt: verifyJwt,
    // user
    validateUser: validateUser,
    deleteIdVerfication: deleteIdVerfication,
    // post
    validatePost: validatePost,
    deletePost: deletePost
}