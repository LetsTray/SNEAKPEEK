import express from "express";
import { createOrder, getUserOrders } from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Melindungi route dengan middleware protect
router.post("/", protect, createOrder); // Buat pesanan baru
router.get("/", protect, getUserOrders); // Ambil pesanan pengguna yang sedang terautentikasi

export default router;
