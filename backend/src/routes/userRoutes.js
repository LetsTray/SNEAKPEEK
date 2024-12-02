import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { getMe, updateProfile } from "../controllers/userController.js";

const router = express.Router();

// User routes
router.route("/me").get(protect, getMe);
router.route("/update").put(protect, updateProfile);

export default router;
