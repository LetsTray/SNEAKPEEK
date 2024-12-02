import express from "express";
import { protect } from "../middlewares/authMiddleware.js"; // Middleware untuk autentikasi
import { createOrder, getUserOrders } from "../controllers/orderController.js"; // Import controller untuk pemesanan

const router = express.Router();

// Membuat pesanan baru
router.route("/").post(protect, createOrder);

// Mendapatkan semua pesanan pengguna yang sedang login
router.route("/").get(protect, getUserOrders);

export default router;
