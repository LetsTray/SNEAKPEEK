import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createProduct,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

// Product routes
router.route("/").get(getProducts).post(protect, createProduct);

export default router;
