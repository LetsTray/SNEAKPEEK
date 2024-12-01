import express from "express";
import authRoute from "./authRoute.js";
import cartRoute from "./cartRoute.js";
import orderRoute from "./orderRoute.js";
import productRoute from "./productRoute.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/cart", cartRoute);
router.use("/orders", orderRoute);
router.use("/products", productRoute);

export default router;
