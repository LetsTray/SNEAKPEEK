import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  fetchCart, // Mengimpor dengan nama yang benar
  addToCart,
  removeFromCart,
} from "../controllers/cartController.js";

const router = express.Router();

// Rute untuk mendapatkan cart dan menambah produk ke cart
router.route("/").get(protect, fetchCart).post(protect, addToCart);

// Rute untuk menghapus produk dari cart
router.route("/remove").delete(protect, removeFromCart);

export default router;
