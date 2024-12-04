import mongoose from "mongoose";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

// Add item to cart
export const addProductToCart = async (userId, productId, quantity) => {
  // Validasi ID produk
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new Error("Invalid product ID");
  }

  // Pastikan produk ada di database
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }

  // Cari cart berdasarkan userId
  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    // Jika cart belum ada untuk user, buat cart baru
    const newCart = new Cart({
      user: userId, // Ambil userId dari JWT token
      items: [{ product: productId, quantity }],
    });
    return await newCart.save(); // Simpan cart baru
  }

  // Jika produk sudah ada di cart, tambahkan jumlahnya
  const existingItem = cart.items.find(
    (item) => item.product.toString() === productId.toString()
  );

  if (existingItem) {
    existingItem.quantity += quantity; // Update jumlah produk
  } else {
    // Jika produk belum ada, tambahkan produk baru ke cart
    cart.items.push({ product: productId, quantity });
  }

  await cart.save(); // Simpan perubahan
  return cart;
};

// Remove item from cart
export const removeProductFromCart = async (userId, productId) => {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new Error("Invalid product ID");
  }

  const cart = await Cart.findOne({ user: userId });
  if (!cart) throw new Error("Cart not found");

  // Hapus item dari cart yang sesuai dengan productId
  cart.items = cart.items.filter(
    (item) => item.product.toString() !== productId.toString()
  );
  await cart.save(); // Simpan perubahan
  return cart;
};

// Get user's cart
export const getCartItems = async (userId) => {
  // Cari cart berdasarkan userId dan populasi produk dalam cart
  const cart = await Cart.findOne({ user: userId }).populate("items.product");

  if (!cart) {
    throw new Error("Cart not found");
  }

  return cart;
};
