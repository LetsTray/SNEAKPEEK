// CartContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { cartService } from "./CartService";

// Membuat konteks untuk cart
const CartContext = createContext();

// CartProvider sebagai wrapper untuk seluruh aplikasi yang memerlukan akses keranjang
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Mengambil data keranjang dari localStorage ketika aplikasi dimuat
  useEffect(() => {
    const savedCart = cartService.getCartFromStorage();
    setCartItems(savedCart);
  }, []);

  // Fungsi untuk menambahkan item ke keranjang
  const addItem = (item) => {
    const updatedCart = cartService.addItemToCart(cartItems, item);
    setCartItems(updatedCart);
  };

  // Fungsi untuk menghapus item dari keranjang
  const removeItem = (id) => {
    const updatedCart = cartService.removeItemFromCart(cartItems, id);
    setCartItems(updatedCart);
  };

  // Fungsi untuk memperbarui jumlah item
  const updateItemQuantity = (id, quantity) => {
    const updatedCart = cartService.updateItemQuantityInCart(
      cartItems,
      id,
      quantity
    );
    setCartItems(updatedCart);
  };

  // Fungsi untuk mengosongkan keranjang
  const clearCart = () => {
    const updatedCart = cartService.clearCart();
    setCartItems(updatedCart);
  };

  // Menghitung total harga keranjang
  const calculateTotalPrice = () => {
    return cartService.calculateTotalPrice(cartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
