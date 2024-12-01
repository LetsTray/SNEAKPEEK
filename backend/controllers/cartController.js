import mongoose from "mongoose";
import Cart from "../models/Cart.js";

// Add item to cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  try {
    // Find cart or create a new one if it doesn't exist
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    // Check if the product already exists in the cart
    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId.toString()
    );

    if (existingItem) {
      // If the product exists, update the quantity
      existingItem.quantity += quantity;
    } else {
      // If the product doesn't exist, add it to the cart
      cart.items.push({ product: productId, quantity });
    }

    // Save the updated cart
    await cart.save();
    res.status(200).json(cart); // Return the updated cart
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get the user's cart with populated product details
export const getCart = async (req, res) => {
  const userId = req.user._id;

  try {
    const cart = await Cart.findOne({ user: userId }).populate("items.product"); // Populate product details

    if (cart) {
      res.json(cart); // Return the populated cart
    } else {
      res.status(404).json({ message: "Cart is empty" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove item from cart
export const removeFromCart = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user._id;

  try {
    // Ensure productId is an ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the product in the cart and remove it
    const initialLength = cart.items.length;
    cart.items = cart.items.filter(
      (item) => item.product.toString() !== productId.toString()
    );

    // Check if the item was removed
    if (cart.items.length === initialLength) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Save the updated cart
    await cart.save();
    res.status(200).json(cart); // Return the updated cart
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
