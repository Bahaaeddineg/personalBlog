const express = require("express");
const router = express.Router();
const {createPost,getAllPosts,getPostById,deletePost,updatePost} = require ("../controllers/posts.js");

// Add this middleware to parse JSON requests
router.use(express.json());

router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id', updatePost);

module.exports = router;
