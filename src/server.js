import express from 'express';
import postRouter from './router/postRouter.js';
import { connectDb } from './config/db.js';
import { errorHandler } from './error/postErrors.js';

const app = express();

// Parse incoming JSON bodies (req.body)
app.use(express.json());

// Mount all post-related routes under /api/posts
// Example: GET /api/posts, POST /api/posts, GET /api/posts/:id
app.use('/api/posts', postRouter);

// Centralized error handling middleware
// This must come AFTER all routes to catch errors forwarded by next(error)
app.use(errorHandler);

// Connect to MongoDB before starting the server
connectDb();

const port = 3000;

// Start the Express server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
