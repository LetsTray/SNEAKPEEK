import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import userRouter from "./routes/userRoutes.js";
import requestLogger from "./middlewares/requestLogger.js";
import errorHandler from "./middlewares/errorHandler.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());
app.use(requestLogger);

// Routes
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/cart", cartRouter);
app.use("/api/users", userRouter);

// Catch-all route untuk rute yang tidak ditemukan
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});

// Middleware penanganan error
app.use(errorHandler);

export default app;
