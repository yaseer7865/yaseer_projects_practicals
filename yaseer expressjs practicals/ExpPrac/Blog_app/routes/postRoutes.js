// const express = require('express');
// const router = express.Router();
// const postController = require('../controllers/postController');

// router.get('/', postController.getAllPosts);
// router.get('/posts/new', postController.getNewForm);
// router.post('/posts', postController.createPost);
// router.get('/posts/:id', postController.getPost);

// module.exports = router;




// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

console.log(postController);  // For debugging: should log all exported functions

router.get('/', postController.getAllPosts);
router.get('/new', postController.getNewForm);
router.post('/', postController.createPost);
router.get('/:id', postController.getPost);
router.post('/:id/delete', postController.deletePost);
router.get('/:id/edit', postController.getEditForm);
router.post('/:id/update', postController.updatePost);


module.exports = router;
