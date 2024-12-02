import express from "express";
import { protect } from "../middlewares/authMiddleware.js"; // Middleware untuk autentikasi
import {
  createProduct,
  getProducts,
} from "../controllers/productController.js"; // Import controller untuk produk

const router = express.Router();

// Mendapatkan daftar produk
router.route("/").get(getProducts);

// Menambahkan produk baru (hanya dapat diakses oleh pengguna yang terautentikasi)
router.route("/").post(protect, createProduct);

export default router;
