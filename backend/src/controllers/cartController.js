import {
  getCartItems,
  addProductToCart,
  removeProductFromCart,
} from "../services/cartService.js";

// Get user's cart with populated product data
export const fetchCart = async (req, res) => {
  try {
    const cart = await getCartItems(req.user._id);
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a product to the cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const cart = await addProductToCart(req.user._id, productId, quantity);
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove a product from the cart
export const removeFromCart = async (req, res) => {
  const { productId } = req.body;
  try {
    const cart = await removeProductFromCart(req.user._id, productId);
    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
