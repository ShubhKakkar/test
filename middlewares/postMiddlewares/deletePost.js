const db = require("../../models");
const Post = db.post;
module.exports = async (req, res, next) => {
    const id = req.body.id;
    if (!id) {
        res.status(400).json({
            message: 'Id cannot be blank'
        });
        return;
    }
    const post = await Post.findOne({
        where: {
            id: id
        }
    });
    if (!post) {
        res.status(400).json({
            message: `Post with ${id} id not found`
        });
        return;
    }
    next();
}