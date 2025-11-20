import express from 'express';
import { addPost, deletePost, getPosts, updatePost } from '../controller/postController.js';

const postRouter = express.Router();

// GET /api/posts/getPosts
// Fetch all posts from the database
postRouter.get('/getPosts', getPosts);

// POST /api/posts/addPosts
// Create a new post using the data sent in the request body
postRouter.post('/addPosts', addPost);

// DELETE /api/posts/delPosts/:id
// Delete a specific post based on its ID
postRouter.delete('/delPosts/:id', deletePost);

// PATCH /api/posts/post/:id
// Update a specific post; only the provided fields will be changed
postRouter.patch('/post/:id', updatePost);

export default postRouter;
