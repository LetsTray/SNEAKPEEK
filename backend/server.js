import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import router from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api", router);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
