// server.js (root directory of your project)
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env

import express from "express";
import { connectDB } from "./src/config/db.js"; // Import DB connection function
import config from "./src/config/env.js"; // Import environment configuration

const app = express();

// Connect to the database
connectDB();

// Middleware (optional, if you need logging, etc.)
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 5000; // Use the environment variable or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app; // Export app for testing or other purposes
