// const Post = require('../models/Post');

// exports.getAllPosts = async (req, res) => {
//   const posts = await Post.find().sort({ createdAt: -1 });
//   res.render('index', { posts });
// };

// exports.getNewForm = (req, res) => {
//   res.render('new');
// };

// exports.createPost = async (req, res) => {
//   const { title, body, imageUrl } = req.body;

//   // Accept any non-empty string as image URL
//   const image = (imageUrl && imageUrl.trim() !== '') ? imageUrl.trim() : null;

//   await Post.create({ title, body, imageUrl: image });
//   console.log('New post created:', { title, body, image });
//   res.redirect('/');
// };


// controllers/postController.js
const Post = require('../models/Post');  // Adjust path as needed

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.render('index', { posts });
};

exports.getNewForm = (req, res) => {
  res.render('new');
};

exports.createPost = async (req, res) => {
  const { title, body, imageUrl } = req.body;

  const validImageExtensions = /\.(jpg|jpeg|png|gif)(\?.*)?$/i;
  const image = (imageUrl && validImageExtensions.test(imageUrl.trim())) ? imageUrl.trim() : null;

  await Post.create({ title, body, imageUrl: image });
  res.redirect('/');
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('show', { post });
};


exports.deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  res.redirect('/posts');
};

exports.getEditForm = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('edit', { post });
};

exports.updatePost = async (req, res) => {
  const { title, body, imageUrl } = req.body;
  const validImageExtensions = /\.(jpg|jpeg|png|gif)(\?.*)?$/i;
  const image = (imageUrl && validImageExtensions.test(imageUrl.trim()))
    ? imageUrl.trim()
    : null;

  await Post.findByIdAndUpdate(req.params.id, { title, body, imageUrl: image });
  res.redirect(`/posts/${req.params.id}`);
};