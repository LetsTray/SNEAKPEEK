import express from "express";
import { protect } from "../middlewares/authMiddleware.js"; // Middleware untuk autentikasi
import {
  getCart,
  addToCart,
  removeFromCart,
} from "../controllers/cartController.js"; // Import controller untuk keranjang

const router = express.Router();

// Mendapatkan keranjang belanja pengguna yang sedang login
router.route("/").get(protect, getCart);

// Menambahkan item ke keranjang belanja
router.route("/").post(protect, addToCart);

// Menghapus item dari keranjang belanja
router.route("/remove").delete(protect, removeFromCart);

export default router;
