import express from "express";
import { register, login } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import requestLogger from "../middlewares/requestLogger.js";

const router = express.Router();

// Apply request logger to all routes
router.use(requestLogger);

// Public Routes
router.post("/register", register);
router.post("/login", login);

// Protected Routes (for example, you can add more routes that require authentication)
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Profile accessed",
    user: req.user,
  });
});

export default router;
