import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createOrder, getUserOrders } from "../controllers/orderController.js";

const router = express.Router();

// Order routes with authentication protection
router.route("/").post(protect, createOrder).get(protect, getUserOrders);

export default router;
