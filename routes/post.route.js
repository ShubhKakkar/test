const postController = require('../controllers/post.controller');
const middlewares = require('../middlewares');

// Auth
const verifyToken = middlewares.verifyJwt.verifyToken;

// Post
const validatePost = middlewares.validatePost;
const deletePost = middlewares.deletePost;

module.exports = (app) => {
    app.post('/social_media/api/v1/create-post', verifyToken, middlewares.validatePost, postController.createPost);
    app.get('/social_media/api/v1/posts', postController.findAllPosts);
    app.get('/social_media/api/v1/users/:userId/posts', postController.findByUser);
    app.get('/social_media/api/v1/posts/:id', postController.findSinglePost);
    app.get('/social_media/api/v1/posts/categories/:id', postController.findByCategory);
    app.put('/social_media/api/v1/update-post', verifyToken, validatePost, postController.updatePost);
    app.delete('/social_media/api/v1/delete-post', verifyToken,  deletePost, postController.deletePost);
}