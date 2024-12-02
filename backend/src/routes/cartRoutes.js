import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  getCart,
  addToCart,
  removeFromCart,
} from "../controllers/cartController.js";

const router = express.Router();

// Cart routes with authentication protection
router.route("/").get(protect, getCart).post(protect, addToCart);
router.route("/remove").delete(protect, removeFromCart);

export default router;
