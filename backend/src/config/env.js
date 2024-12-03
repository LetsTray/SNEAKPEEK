import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  PORT: process.env.PORT || 5000,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
};

export default config;
