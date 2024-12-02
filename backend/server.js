import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./src/config/db.js";
import config from "./src/config/env.js";

dotenv.config(); // Load environment variables

const app = express();

// Initialize DB connection
connectDB();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Start the server on specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
