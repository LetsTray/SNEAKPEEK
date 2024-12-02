// src/config/db.js
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("MongoDB URI:", process.env.MONGO_URI); // Check URI value for debugging
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1); // Exit the app if the connection fails
  }
};
