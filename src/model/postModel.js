import mongoose from 'mongoose'

// Define the structure of a Post document in MongoDB
const postSchema = new mongoose.Schema({
    
    // Title of the post (must be provided)
    title: {
        type: String,
        required: true
    },

    // Body/content of the post (optional field)
    content: {
        type: String
    }
});

// Create and export the Post model based on the schema
// The 'Post' model will interact with the 'posts' collection in MongoDB
export const postModel = mongoose.model('Post', postSchema);
