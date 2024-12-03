import { connectDB } from "./config/db.js";
import app from "./app.js";

const startServer = async () => {
  try {
    await connectDB(); // Connect to the database
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

startServer();
