{
  /*
    // cartService.js
const CART_KEY = 'shoppingCart'; // Key for local storage

// Function to get the current cart from local storage
const getCart = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

// Function to save the current cart to local storage
const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// Function to add an item to the cart
export const addToCart = (item) => {
  const cart = getCart();
  const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

  if (existingItemIndex > -1) {
    // If item already exists in the cart, update its quantity
    cart[existingItemIndex].quantity += item.quantity;
  } else {
    // If item does not exist, add it to the cart
    cart.push(item);
  }

  saveCart(cart);
};

// Function to remove an item from the cart
export const removeFromCart = (id) => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== id);
  saveCart(updatedCart);
};

// Function to update the quantity of an item in the cart
export const updateCartItemQuantity = (id, quantity) => {
  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === id);

  if (itemIndex > -1) {
    if (quantity <= 0) {
      // If quantity is 0 or less, remove the item
      removeFromCart(id);
    } else {
      // Update the item's quantity
      cart[itemIndex].quantity = quantity;
      saveCart(cart);
    }
  }
};

// Function to clear the cart
export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};

// Function to get the total price of items in the cart
export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

// Function to get the cart items
export const getCartItems = () => {
  return getCart();
};
    */
}

{
  /*
    import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  getCartItems,
  getCartTotal,
} from './cartService'; // Adjust the path as necessary

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = getCartItems(); // Load initial cart items from the service
    setCartItems(items);
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id
    */
}