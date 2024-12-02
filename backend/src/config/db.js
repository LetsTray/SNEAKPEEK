// src/config/db.js
import mongoose from "mongoose";

/**
 * Connect to MongoDB
 */
export const connectDB = async () => {
  const { MONGO_URI } = process.env;

  if (!MONGO_URI) {
    console.error("MONGO_URI is not defined in environment variables");
    process.exit(1); // Exit if MONGO_URI is not available
  }

  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1); // Exit if connection fails
  }
};
