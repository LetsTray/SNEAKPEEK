import express from "express";
import { addToCart } from "../controllers/cartController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Add to cart
router.post("/add", authMiddleware, addToCart);

export default router;
