const jwt = require("jsonwebtoken");
const authConfig = require("../configs/auth.config");
const db = require("../models");
const User = db.user;

const verifyToken = (req,res,next) => {
    
}

const isAdmin = (req, res, next) => {

}

module.exports = {
    verifyToken: verifyToken,
    isAdmin: isAdmin
}