{
  /*
    import React from 'react';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity >= 0) {
      onUpdateQuantity(item.id, newQuantity); // Call the update function with the item ID and new quantity
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-name">{item.name}</h2>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
        <div className="cart-item-quantity">
          <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
          <input
            type="number"
            id={`quantity-${item.id}`}
            value={item.quantity}
            onChange={handleQuantityChange}
            min="0"
          />
        </div>
        <button onClick={() => onRemove(item.id)} className="cart-item-remove">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
    */
}