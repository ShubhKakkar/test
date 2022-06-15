const db = require('../models');
const User = db.user;
const Role = db.role;
const bcrypt = require('bcrypt');
const Op = db.Sequelize.Op;

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
        res.send(roles);
    }
    else {
        user.setRoles([1]).then(() => {
            res.send("User registered successfully");
        });
    }

}

exports.signIn = (req, res) => {

}