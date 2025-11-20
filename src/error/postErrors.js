export const errorHandler = (error, req, res, next) => {
    try {
        // Use custom status code if provided by the thrown error,
        // otherwise default to 500 (Internal Server Error)
        const statusCode = error.statusCode || 500;

        // Use custom error message if available,
        // otherwise send a generic fallback message
        const message = error.message || "something went wrong, try again later";

        // Send the formatted error response to the client
        return res.status(statusCode).json({ message: message });

    } catch (error) {
        // If something goes wrong inside the error handler itself,
        // send a final fallback error response
        res.status(500).json({ message: "something went wrong" });
    }
};
