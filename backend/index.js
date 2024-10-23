import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConnect.js";
import authRouter from "./routes/authRoute.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/user", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
