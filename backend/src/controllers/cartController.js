import {
  getCartItems,
  addProductToCart,
  removeProductFromCart,
} from "../services/cartService.js";
import mongoose from "mongoose";

// Get user's cart with populated product data
export const fetchCart = async (req, res) => {
  try {
    const cart = await getCartItems(req.user.id); // Pastikan user.id ada
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error.message);
    res.status(404).json({ message: error.message });
  }
};

// Add a product to the cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  // Validasi input
  if (
    !mongoose.Types.ObjectId.isValid(productId) ||
    !quantity ||
    quantity < 1
  ) {
    return res.status(400).json({
      message: "Invalid product ID or quantity",
    });
  }

  try {
    const cart = await addProductToCart(req.user.id, productId, quantity);
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.status(400).json({ message: error.message });
  }
};

// Remove a product from the cart
export const removeFromCart = async (req, res) => {
  const { productId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const cart = await removeProductFromCart(req.user.id, productId);
    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (error) {
    console.error("Error removing from cart:", error.message);
    res.status(400).json({ message: error.message });
  }
};
