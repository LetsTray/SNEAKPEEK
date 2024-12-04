import express from "express";
import {
  registerUserController,
  loginUserController,
} from "../controllers/authController.js";

const router = express.Router();

// Route untuk registrasi pengguna
router.post("/register", registerUserController);

// Route untuk login pengguna
router.post("/login", loginUserController);

export default router;
