import mongoose from "mongoose";

// Connect to MongoDB using Mongoose
// This function is called once when the server starts
export const connectDb = async () => {
    try {
        // Attempt to establish a connection to the MongoDB Atlas cluster
        await mongoose.connect(
            "mongodb+srv://1999amanprasad07_db_user:zLm223OxLTji0pxO@cluster0.ljuggak.mongodb.net/postsDB"
        );

        console.log("DB connected successfully");

    } catch (error) {
        // If the connection fails, log the error for debugging
        console.log(error);
    }
};
