import mongoose from "mongoose";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// Service untuk menambahkan produk ke keranjang
export const addProductToCartService = async (userId, productId, quantity) => {
  // Validasi apakah productId valid
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new Error("Invalid product ID");
  }

  // Mencari produk berdasarkan productId
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product not found");

  // Mencari keranjang pengguna
  const cart = await Cart.findOne({ user: userId });

  // Jika keranjang tidak ditemukan, buat keranjang baru
  if (!cart) {
    const newCart = new Cart({
      user: userId,
      items: [{ product: productId, quantity }],
    });
    return await newCart.save();
  }

  // Jika produk sudah ada di keranjang, tambahkan kuantitas
  const existingItem = cart.items.find(
    (item) => item.product.toString() === productId.toString()
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  // Simpan perubahan keranjang
  await cart.save();
  return cart;
};

// Service untuk menghapus produk dari keranjang
export const removeProductFromCartService = async (userId, productId) => {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new Error("Invalid product ID");
  }

  const cart = await Cart.findOne({ user: userId });
  if (!cart) throw new Error("Cart not found");

  cart.items = cart.items.filter(
    (item) => item.product.toString() !== productId.toString()
  );

  await cart.save();
  return cart;
};

// Service untuk mendapatkan keranjang pengguna
export const getUserCartService = async (userId) => {
  const cart = await Cart.findOne({ user: userId }).populate("items.product");
  if (!cart) throw new Error("Cart not found");
  return cart;
};
