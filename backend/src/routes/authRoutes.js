import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js"; // Controller untuk registrasi dan login

const router = express.Router();

// Registrasi pengguna baru
router.post("/register", registerUser);

// Login pengguna yang sudah terdaftar
router.post("/login", loginUser);

export default router;
