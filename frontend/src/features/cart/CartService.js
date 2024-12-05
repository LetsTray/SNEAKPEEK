// cartService.js

// Mengambil data keranjang dari localStorage
const getCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

// Menyimpan data keranjang ke localStorage
const saveCartToStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

// Menambahkan item ke keranjang
const addItemToCart = (cartItems, item) => {
  const existingItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === item.id
  );
  if (existingItemIndex >= 0) {
    // Jika item sudah ada, perbarui jumlahnya
    cartItems[existingItemIndex].quantity += item.quantity;
  } else {
    // Jika item belum ada, tambahkan item baru
    cartItems.push(item);
  }
  saveCartToStorage(cartItems);
  return cartItems;
};

// Menghapus item dari keranjang
const removeItemFromCart = (cartItems, itemId) => {
  const updatedCart = cartItems.filter((item) => item.id !== itemId);
  saveCartToStorage(updatedCart);
  return updatedCart;
};

// Memperbarui jumlah item di keranjang
const updateItemQuantityInCart = (cartItems, itemId, quantity) => {
  const updatedCart = cartItems.map((item) =>
    item.id === itemId ? { ...item, quantity: quantity } : item
  );
  saveCartToStorage(updatedCart);
  return updatedCart;
};

// Mengosongkan keranjang
const clearCart = () => {
  localStorage.removeItem("cart");
  return [];
};

// Menghitung total harga keranjang
const calculateTotalPrice = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const cartService = {
  getCartFromStorage,
  saveCartToStorage,
  addItemToCart,
  removeItemFromCart,
  updateItemQuantityInCart,
  clearCart,
  calculateTotalPrice,
};
