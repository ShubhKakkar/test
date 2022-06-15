const db = require('../models');
const User = db.user;
const Role = db.role;
const bcrypt = require('bcrypt');
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const authConfig = require('../configs/auth.config');

exports.signUp = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const user = await User.create({
        username: username,
        email: email,
        password: bcrypt.hashSync(password, 8)
    });
    if (req.body.roles) {
        const roles = await Role.findAll({
            where: {
                name: {
                    [Op.or]: Array(req.body.roles)
                }
            }
        });
        await user.setRoles(roles);
        res.status(201).json({
            message: 'User created successfully'
        })
    }
    else {
        user.setRoles([1]).then(() => {
            res.send("User registered successfully");
        });
    }

}

exports.signIn = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({
        where: {
            email: email
        }
    });
    if (user) {
        if (!bcrypt.compareSync(password, user.password)) {
            res.send("Password dosen't match");
        }
        else {
            const token = await jwt.sign({ id: user.id }, authConfig.secret_key, { expiresIn: 86400 }); //expires in 24 hours
            res.status(201).json({
                token: token
            });
        }
    }
    else {
        res.send("No such user found, please sign up to continue");
    }
}