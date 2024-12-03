// src/config/env.js
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Validate essential environment variables
const requiredVars = ["MONGO_URI", "JWT_SECRET", "STRIPE_SECRET_KEY"];

requiredVars.forEach((varName) => {
  if (!process.env[varName]) {
    console.error(`Missing required environment variable: ${varName}`);
    process.exit(1);
  }
});

// Export environment configuration with default values for non-critical vars
export default {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE: process.env.JWT_EXPIRE || "30d", // Default to 30 days
  PORT: process.env.PORT || 5000, // Default to port 5000
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  NODE_ENV: process.env.NODE_ENV || "development", // Default to 'development'
};
