import express from "express";
import { connectDB } from "./src/config/db.js";
import { requestLogger } from "./src/middlewares/authMiddleware.js"; // Example middleware import

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(requestLogger);

// Your other app setup code...

export default app; // Default export for the Express app
