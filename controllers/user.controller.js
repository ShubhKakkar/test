const db = require('../models');
const User = db.user;

exports.findAllUsers = (req,res) => {
    User.findAll({}).then((users) => {
        res.status(200).json({users: users});
    }).catch((err) => {
        res.status(500).json({err: err.message});
    });
}

exports.findSingleUser = (req,res) => {
    User.findAll({
        where:{
            id: req.params.id
        }
    }).then((users) => {
        res.status(200).json({users: users});
    }).catch((err) => {
        res.status(500).json({err: err.message});
    })
}

exports.updateUser = (req,res) => {

}

exports.deleteUser = (req,res) => {

}