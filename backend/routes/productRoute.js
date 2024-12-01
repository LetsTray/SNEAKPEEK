import express from "express";
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/authMiddleware.js"; // Mengimpor isAdmin

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", protect, isAdmin, addProduct); // Hanya admin yang bisa menambah produk
router.put("/:id", protect, isAdmin, updateProduct); // Hanya admin yang bisa mengubah produk
router.delete("/:id", protect, isAdmin, deleteProduct); // Hanya admin yang bisa menghapus produk

export default router;
