import { connectDB } from "./config/db.js";
import app from "./app.js";

// Connect to the database
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
