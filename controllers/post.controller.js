const db = require('../models');
const Post = db.post;

exports.createPost = (req, res) => {
    const post = {
        title: req.body.title,
        description: req.body.description,
        categories: req.body.categories,
        userId:req.body.userId
    };
    Post.create(post).then(() => {
        res.status(201).json({
            message: "Post created successfully"
        });
    }).catch(err => {
        message: err.message
    });
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
        where: {
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

exports.findByCategory = (req, res) => {
    const categoryId = req.params.id;
    Post.findAll({}).then((posts)=> {
        const postArray = [];
        posts.forEach((post)=>{
                if(post.categories.includes(categoryId)){
                    postArray.push(post);
                }
        });
        res.status(201).json({
            posts:postArray,
        });
    }).catch((err)=> {
        message: err.message
    });
}

exports.updatePost = (req, res) => {
    const post = {
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId
    }
    Post.update(post, {
        where: {
            id: req.body.id
        }
    }).then(() => {
        res.status(201).json({
            message: "Post updated successfully"
        })
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        })
    });
}

exports.deletePost = (req, res) => {
    const id = req.body.id;
    Post.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.status(201).json({
            message: "Post deleted successfully",
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message
        });
    });
}