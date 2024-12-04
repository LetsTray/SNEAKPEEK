import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createNewOrder,
  getUserOrders,
  updateOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// Route untuk membuat order dan mendapatkan order pengguna
router.route("/").post(protect, createNewOrder).get(protect, getUserOrders);

// Route untuk memperbarui status order, dengan orderId sebagai parameter URL
router.route("/:orderId/status").put(protect, updateOrder);

export default router;
