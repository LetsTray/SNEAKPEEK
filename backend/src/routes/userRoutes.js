import express from "express";
import {
  fetchUserProfileController,
  updateUserProfileController,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rute untuk mendapatkan profil pengguna (autentikasi diperlukan)
router.get("/profile", protect, fetchUserProfileController);

// Rute untuk memperbarui profil pengguna (autentikasi diperlukan)
router.put("/profile", protect, updateUserProfileController);

export default router;
