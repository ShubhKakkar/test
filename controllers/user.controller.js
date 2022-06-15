const db = require('../models');
const User = db.user;
const Post = db.post;

exports.findAllUsers = (req, res) => {
    User.findAll({}).then((users) => {
        res.status(200).json({ users: users });
    }).catch((err) => {
        res.status(500).json({ err: err.message });
    });
}

exports.findSingleUser = (req, res) => {
    User.findAll({
        where: {
            id: req.params.id
        }
    }).then((users) => {
        res.status(200).json({ users: users });
    }).catch((err) => {
        res.status(500).json({ err: err.message });
    })
}

exports.updateUser = (req, res) => {

}

exports.deleteUser = (req, res) => {
    Post.destroy({
        where:{
            userId:req.body.id
        }
    }).then(()=>{
        User.destroy({
            where: {
                id: req.body.id
            }
        }).then(() => {
            res.status(200).json({
                message: `User with id ${req.body.id} deleted successfully`
            });
        }).catch((err) => {
            res.status(500).json({
                err: err.message
            });
        });
    }).catch((err)=>{
        res.status(500).json({
            err: err.message
        });
    })
}