import { postModel } from "../model/postModel.js";

// GET /api/posts/getPosts
// Fetch all posts from the database
export const getPosts = async (req, res, next) => {
    try {
        const postList = await postModel.find();   // Retrieve all documents
        return res.status(200).json({
            data: postList,
            success: true
        });
    } catch (error) {
        next(error); // Forward error to centralized error handler
    }
};


// POST /api/posts/addPosts
// Create a new post
export const addPost = async (req, res, next) => {
    try {
        const { title, content } = req.body;

        // Validate required field
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        // Check if a post with the same title already exists
        const exist = await postModel.findOne({ title });
        if (exist) {
            return res.status(400).json({ message: "Post already exists" });
        }

        // Create and save the new post
        const post = new postModel({ title, content });
        await post.save();

        return res.status(201).json({
            message: "Post added successfully",
            post,
            success: true
        });

    } catch (error) {
        next(error); // Send error to the error handler
    }
};


// PATCH /api/posts/post/:id
// Update a specific post
export const updatePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        // Ensure ID is provided
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        // Ensure at least one field is provided to update
        if (!title && !content) {
            return res.status(400).json({ message: "Any field is required" });
        }

        // Update the post and return the new version of the document
        const updatedPost = await postModel.findByIdAndUpdate(
            id,
            { title, content },
            { new: true }
        );

        return res.status(200).json({
            message: "Post updated successfully",
            data: updatedPost,
            success: true
        });

    } catch (error) {
        next(error); // Forward to the error handler
    }
};


// DELETE /api/posts/delPosts/:id
// Delete a specific post
export const deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Validate ID
        if (!id) {
            return res.status(400).json({ message: "ID is required" });
        }

        // Delete the post
        await postModel.findByIdAndDelete(id);

        // 204 means "No Content" — successful deletion
        return res.status(204).json({
            message: "Post deleted successfully",
            success: true
        });

    } catch (error) {
        next(error); // Forward error to middleware
    }
};
