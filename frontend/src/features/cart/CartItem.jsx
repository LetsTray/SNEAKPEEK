import React, { useState } from "react";
import Button from "./Button"; // Pastikan path ini benar

const CartItem = ({ item, removeItem, updateItemQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    updateItemQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex justify-between items-center py-4 border-b">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover mr-4"
        />
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          className="w-16 p-2 border border-gray-300 rounded"
        />
        <Button
          onClick={() => removeItem(item.id)}
          className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
