{
  /*
    import React, { useState } from 'react';
import CartItem from './CartItem'; // Import the CartItem component

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      quantity: 1,
      image: 'https://via.placeholder.com/100', // Example image URL
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      quantity: 2,
      image: 'https://via.placeholder.com/100', // Example image URL
    },
    // Add more items as needed
  ]);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p>Total: ${calculateTotal()}</p>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
    
    */
}