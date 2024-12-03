import express from "express";
import { protect, admin } from "../middlewares/authMiddleware.js"; // Pastikan ini ada
import {
  getProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  deleteProductById,
} from "../controllers/productController.js";

const router = express.Router();

// Rute untuk mendapatkan semua produk atau menambahkan produk baru
router.route("/").get(getProducts).post(protect, admin, addProduct);

// Rute untuk mendapatkan, memperbarui, atau menghapus produk berdasarkan ID
router
  .route("/:id")
  .get(getProduct)
  .put(protect, admin, updateProductDetails) // Hanya admin yang bisa update
  .delete(protect, admin, deleteProductById); // Hanya admin yang bisa delete

export default router;
