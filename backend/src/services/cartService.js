import Cart from "../models/Cart.js";

// Add item to cart
export const addProductToCart = async (userId, productId, quantity) => {
  // Cari cart berdasarkan userId
  const cart = await Cart.findOne({ user: userId });

  if (!cart) {
    // Jika cart belum ada untuk user, buat cart baru
    const newCart = new Cart({
      user: userId, // Ambil userId dari JWT token
      items: [{ product: productId, quantity }],
    });
    return newCart.save(); // Simpan cart baru
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
  return Cart.findOne({ user: userId }).populate("items.product");
};
