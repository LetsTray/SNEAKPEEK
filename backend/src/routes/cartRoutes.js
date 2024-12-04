import express from "express";
import {
  fetchUserCartController,
  addProductToCartController,
  removeProductFromCartController,
} from "../controllers/cartController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rute untuk mendapatkan keranjang pengguna
router.get("/", protect, fetchUserCartController);

// Rute untuk menambahkan produk ke keranjang
router.post("/", protect, addProductToCartController);

// Rute untuk menghapus produk dari keranjang berdasarkan ID
router.delete("/:productId", protect, removeProductFromCartController);

export default router;
