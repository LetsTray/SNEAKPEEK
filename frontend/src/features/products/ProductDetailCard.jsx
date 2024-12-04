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

{
  /*
    import React from 'react';

const ProductDetailCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart({ 
      id: product.id, 
      name: product.name, 
      price: product.price, 
      quantity: 1, // Default quantity when adding to cart
      image: product.image 
    });
  };

  return (
    <div className="product-detail-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailCard;
    */
}