import express from "express";
import { protect } from "../middlewares/authMiddleware.js"; // Middleware untuk melindungi rute yang membutuhkan autentikasi
import { getMe, updateProfile } from "../controllers/userController.js"; // Controller untuk mendapatkan data pengguna dan memperbarui profil

const router = express.Router();

// Rute untuk mengambil data pengguna yang sedang login
router.get("/me", protect, getMe);

// Rute untuk memperbarui data pengguna
router.put("/update", protect, updateProfile);

export default router;
