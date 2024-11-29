import express from "express";
import { getProducts, addProduct } from "../controllers/productCOntroller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Add a new product (only for admin)
router.post("/", authMiddleware, addProduct);

export default router;
