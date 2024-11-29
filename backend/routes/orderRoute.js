import express from "express";
import { placeOrder } from "../controllers/orderController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Place order
router.post("/place", authMiddleware, placeOrder);

export default router;
