// backend/routes/orderRoutes.js
const express = require("express");
const {
  createOrder,
  getUserOrders,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

// Create a new order
router.post("/", protect, createOrder);

// Get all orders for authenticated user
router.get("/myorders", protect, getUserOrders);

module.exports = router;
