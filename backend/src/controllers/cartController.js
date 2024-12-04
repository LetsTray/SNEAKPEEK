import {
  getUserCartService,
  addProductToCartService,
  removeProductFromCartService,
} from "../services/cartService.js";
import mongoose from "mongoose";

// Controller untuk mendapatkan keranjang pengguna
export const fetchUserCartController = async (req, res) => {
  try {
    const cart = await getUserCartService(req.user.id);
    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error.message);
    res.status(404).json({ message: error.message });
  }
};

// Controller untuk menambahkan produk ke keranjang
export const addProductToCartController = async (req, res) => {
  const { productId, quantity } = req.body;

  if (
    !mongoose.Types.ObjectId.isValid(productId) ||
    !quantity ||
    quantity < 1
  ) {
    return res.status(400).json({ message: "Invalid product ID or quantity" });
  }

  try {
    const cart = await addProductToCartService(
      req.user.id,
      productId,
      quantity
    );
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.status(400).json({ message: error.message });
  }
};

// Controller untuk menghapus produk dari keranjang
export const removeProductFromCartController = async (req, res) => {
  const { productId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid product ID" });
  }

  try {
    const cart = await removeProductFromCartService(req.user.id, productId);
    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (error) {
    console.error("Error removing from cart:", error.message);
    res.status(400).json({ message: error.message });
  }
};
