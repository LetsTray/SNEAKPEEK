import express from "express";
import { connectDB } from "./config/db.js";
import config from "./config/env.js";

// Log environment info (optional)
console.log(`Running in ${config.NODE_ENV} mode`);

// Connect to the database and start the server
connectDB().then(() => {
  const app = express();
  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
});
