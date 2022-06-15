const db = require('../models');
const Post = db.post;

exports.createPost = (req, res) => {

}

exports.findAllPosts = (req, res) => {
    Post.findAll({}).then((posts) => {
        res.status(200).json({ posts: posts });
    }).catch((err) => {
        res.status(500).json({ err: err.message });
    });
}

exports.findByUser = (req, res) => {
    const userId = req.params.userId;
    Post.findAll({
        where:{
            userId: userId
        }
    }).then((posts) => {
        res.status(200).json({ posts: posts });
    }).catch((err) => {
        res.status(500).json({ err: err.message });
    });
}

exports.findSinglePost = (req, res) => {
    Post.findAll({
        where: {
            id: req.params.id
        }
    }).then((posts) => {
        res.status(200).json({ posts: posts });
    }).catch((err) => {
        res.status(500).json({ err: err.message });
    })
}

exports.updatePost = (req, res) => {

}

exports.deletePost = (req, res) => {

}