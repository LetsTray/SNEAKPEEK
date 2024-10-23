import express from "express";
import {
  createUser,
  loginUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
  blockUser,
  unblockUser,
} from "../controllers/userController.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// User registration and login routes
router.post("/register", createUser);
router.post("/login", loginUser);

// Apply authentication middleware to all user management routes
router.use(authMiddleware, isAdmin);

// Admin-only user management routes
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);

// Update user routes
router.put("/:id", updateUser); // Update user by ID
router.put("/block/:id", blockUser); // Block user by ID
router.put("/unblock/:id", unblockUser); // Unblock user by ID

export default router;
