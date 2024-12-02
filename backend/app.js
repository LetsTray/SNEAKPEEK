import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"; // Import route pengguna

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Untuk parsing JSON
app.use(cors()); // Untuk menangani CORS

// Routes
app.use("/api/users", userRoutes);

export default app;
