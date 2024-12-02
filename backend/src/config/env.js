import dotenv from "dotenv";

// Memuat variabel lingkungan dari file .env
dotenv.config();

// Memastikan semua variabel lingkungan yang penting tersedia
const config = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRE: process.env.JWT_EXPIRE || "30d", // Default ke 30 hari jika tidak ada
  PORT: process.env.PORT || 5000, // Default ke port 5000 jika tidak ada
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  NODE_ENV: process.env.NODE_ENV || "development", // Default ke development jika tidak ada
};

// Mengecek apakah variabel lingkungan yang diperlukan ada
const requiredEnvVars = ["MONGO_URI", "JWT_SECRET", "STRIPE_SECRET_KEY"];

requiredEnvVars.forEach((varName) => {
  if (!config[varName]) {
    console.error(`Error: Missing required environment variable: ${varName}`);
    process.exit(1); // Keluar dari aplikasi jika variabel lingkungan tidak ada
  }
});

export default config;
