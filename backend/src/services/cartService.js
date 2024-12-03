import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";

// Find or create a cart for the user
export const findOrCreateCart = async (userId) => {
  let cart = await Cart.findOne({ user: userId });
  if (!cart) {
    cart = new Cart({ user: userId, items: [] });
    await cart.save();
  }
  return cart;
};

// Get user's cart with populated product data
export const getCartByUserId = async (userId) => {
  return await Cart.findOne({ user: userId }).populate("items.product");
};

// Add a product to the cart
export const addProductToCart = async (userId, productId, quantity) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");

  const cart = await findOrCreateCart(userId);

  const existingItem = cart.items.find(
    (item) => item.product.toString() === productId
  );
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  return cart;
};

// Remove a product from the cart
export const removeProductFromCart = async (userId, productId) => {
  const cart = await Cart.findOne({ user: userId });
  if (!cart) throw new Error("Cart not found");

  const itemIndex = cart.items.findIndex(
    (item) => item.product.toString() === productId
  );
  if (itemIndex === -1) throw new Error("Product not found in cart");

  cart.items.splice(itemIndex, 1);
  await cart.save();

  return cart;
};
