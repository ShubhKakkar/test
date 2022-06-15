const postController = require('../controllers/post.controller');
const middlewares = require('../middlewares');
module.exports = (app) => {
    app.post('/social_media/api/v1/create-post', middlewares.verifyJwt.verifyToken, middlewares.verifyJwt.isAdmin, middlewares.validatePost, postController.createPost);
    app.get('/social_media/api/v1/posts', postController.findAllPosts);
    app.get('/social_media/api/v1/users/:userId/posts', postController.findByUser);
    app.get('/social_media/api/v1/posts/:id', postController.findSinglePost);
    app.put('/social_media/api/v1/update-post/:id', middlewares.verifyJwt.verifyToken, middlewares.verifyJwt.isAdmin, middlewares.validatePost, postController.updatePost);
    app.delete('/social_media/api/v1/delete-post/', middlewares.verifyJwt.verifyToken, middlewares.verifyJwt.isAdmin, postController.deletePost);
}