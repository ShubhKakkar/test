const db = require('../models');
const User = db.user;
const Roles = db.ROLE;
const verifyDetails = (req, res, next) => {
    if (!req.body.username) {
        res.status(500).json({
            message: 'Username cannot be blank'
        });
        return;
    }
    else if (!req.body.password) {
        res.status(500).json({
            message: 'Password cannot be blank'
        });
        return;
    }
    else if (!req.body.email) {
        res.status(400).json({
            message: 'Email cannot be blank'
        });
        return;
    }
    next();
}

const checkDuplication = async (req, res, next) => {
    const email = req.body.email;
    const user = await User.findOne({
        where: {
            email: email
        }
    });
    if (!user) {
        next();
    }
    else {
        res.send(409).json({
            message: 'User already exists'
        });
        return;
    }
}

const checkRoles = (req, res, next) => {
    if(req.body.roles){
        const roles = req.body.roles;
        roles.forEach(role => {
            if(!Roles.includes(role)){
                res.status(404).json({
                    message: "Failed! " + role + " role does not exist."
                });
                return;
            }
        });
    }
    next();
}

module.exports = {
    verifyDetails: verifyDetails,
    checkDuplication: checkDuplication,
    checkRoles: checkRoles
}