import express from "express";
import {
  createOrderController,
  getUserOrdersController,
  updateOrderStatusController,
} from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Rute untuk membuat order baru
router.post("/", protect, createOrderController);

// Rute untuk mendapatkan semua orders dari user
router.get("/", protect, getUserOrdersController);

// Rute untuk memperbarui status order berdasarkan ID
router.put("/:orderId", protect, updateOrderStatusController);

export default router;
