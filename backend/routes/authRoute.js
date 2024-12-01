import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/authController.js";
import {
  validateRegister,
  validateLogin,
  validateRequest,
} from "../middlewares/validate.js";

const router = express.Router();

router.post("/register", validateRegister, validateRequest, registerUser);
router.post("/login", validateLogin, validateRequest, loginUser);
router.get("/me", getMe);

export default router;
