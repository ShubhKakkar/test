const db = require("../models");
const User = db.user;
module.exports = async (req, res, next) => {
    const id = req.body.id;
    if (!id) {
        res.status(400).json({
            message: 'Id cannot be blank'
        });
        return;
    }
    const user = await User.findOne({
        where: {
            id: id
        }
    });
    if (!user) {
        res.status(400).json({
            message: `User with ${id} id not found`
        });
        return;
    }
    next();
}