import expressAsyncHandler from "express-async-handler";
import Cart from "../models/Cart.js";
import mongoose from "mongoose";

export const addToCart = expressAsyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = new Cart({ user: userId, items: [] });
  }

  const existingItem = cart.items.find(
    (item) => item.product.toString() === productId.toString()
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  res.status(200).json(cart);
});

export const getCart = expressAsyncHandler(async (req, res) => {
  const userId = req.user._id;
  const cart = await Cart.findOne({ user: userId }).populate("items.product");

  if (cart) {
    res.json(cart);
  } else {
    res.status(404).json({ message: "Cart is empty" });
  }
});

export const removeFromCart = expressAsyncHandler(async (req, res) => {
  const { productId } = req.params;
  const userId = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  const cart = await Cart.findOne({ user: userId });
  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  const initialLength = cart.items.length;
  cart.items = cart.items.filter(
    (item) => item.product.toString() !== productId.toString()
  );

  if (cart.items.length === initialLength) {
    return res.status(404).json({ message: "Product not found in cart" });
  }

  await cart.save();
  res.status(200).json(cart);
});
