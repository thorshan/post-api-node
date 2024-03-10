const Post = require("../models/Post");

const fetchAllPosts = async (req, res) => {
  const posts = await Post.find();
  res.json({ posts });
};

const newPost = async (req, res) => {
  const { title, content, author } = req.body;
  const post = await Post.create({
    title,
    content,
    author,
  });
  res.json({ post });
};

const viewPost = async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  res.json({ post });
};

const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { title, content, author } = req.body;
  const post = await Post.findByIdAndUpdate(postId, {
    title,
    content,
    author,
  });
  res.json({ post });
};

const deletePost = async (req, res) => {
  const postId = req.params.id;
  await Post.findByIdAndDelete(postId);
  res.json({ message: "Post deleted!" });
};

module.exports = {
  fetchAllPosts,
  newPost,
  viewPost,
  updatePost,
  deletePost,
};
