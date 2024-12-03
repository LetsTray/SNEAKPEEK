import { Cart } from "../models/cart.js";

// Add item to cart
export const addProductToCart = async (userId, productId, quantity) => {
  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    const newCart = new Cart({
      user: userId,
      items: [{ product: productId, quantity }],
    });
    return newCart.save();
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
  return cart;
};

// Remove item from cart
export const removeProductFromCart = async (userId, productId) => {
  const cart = await Cart.findOne({ user: userId });
  if (!cart) throw new Error("Cart not found");

  cart.items = cart.items.filter(
    (item) => item.product.toString() !== productId.toString()
  );
  await cart.save();
  return cart;
};

// Get user's cart
export const getCartItems = async (userId) => {
  return Cart.findOne({ user: userId }).populate("items.product");
};
