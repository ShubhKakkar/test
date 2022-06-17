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
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    User.update(user, {
        where: {
            id: req.body.id
        }
    }).then((user) => {
        res.status(201).json({
            message: "User updated successfully"
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    });
}

exports.deleteUser = (req, res) => {
    Post.destroy({
        where: {
            userId: req.body.id
        }
    }).then(() => {
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
    }).catch((err) => {
        res.status(500).json({
            err: err.message
        });
    })
}

exports.showAdminPanel = (req, res) => {
    
}