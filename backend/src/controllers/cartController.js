// cartController.js (Controller)
import {
  getCartItems,
  addProductToCart,
  removeProductFromCart,
} from "../services/cartService.js";

// Get user's cart with populated product data
export const fetchCart = async (req, res) => {
  try {
    // Fetch user's cart using the user ID from the JWT token
    const cart = await getCartItems(req.user.id); // Ensure you are using `req.user.id`
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.json(cart);
  } catch (error) {
    console.error(error); // For debugging
    res.status(500).json({ message: error.message });
  }
};

// Add a product to the cart
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    // Pastikan req.user.id ada
    console.log("User ID from request:", req.user.id);

    // Lakukan operasi menambahkan produk ke cart
    const cart = await addProductToCart(req.user.id, productId, quantity);
    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove a product from the cart
export const removeFromCart = async (req, res) => {
  const { productId } = req.body;

  // Validate request body
  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  try {
    // Remove product from the cart
    const cart = await removeProductFromCart(req.user.id, productId); // Ensure you are using `req.user.id`
    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (error) {
    console.error(error); // For debugging
    res.status(400).json({ message: error.message });
  }
};
