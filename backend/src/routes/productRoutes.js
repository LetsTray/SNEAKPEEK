import express from "express";
import {
  fetchAllProductsController,
  fetchProductByIdController,
  createNewProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Mendapatkan semua produk
router.get("/", fetchAllProductsController);

// Mendapatkan produk berdasarkan ID
router.get("/:productId", fetchProductByIdController);

// Menambahkan produk baru (hanya admin)
router.post("/", protect, admin, createNewProductController);

// Memperbarui produk berdasarkan ID (hanya admin)
router.put("/:productId", protect, admin, updateProductController);

// Menghapus produk berdasarkan ID (hanya admin)
router.delete("/:productId", protect, admin, deleteProductController);

export default router;
