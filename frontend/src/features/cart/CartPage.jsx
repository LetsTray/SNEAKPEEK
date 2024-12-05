// CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../features/cart/CartContext"; // Import CartContext

const CartPage = () => {
  const {
    cartItems,
    removeItem,
    updateItemQuantity,
    clearCart,
    calculateTotalPrice,
  } = useContext(CartContext); // Mengakses context

  const handleQuantityChange = (id, event) => {
    updateItemQuantity(id, Number(event.target.value));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 border-b"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => handleQuantityChange(item.id, e)}
                    className="border p-2 w-16 text-center"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 text-white py-1 px-4 rounded"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Clear Cart
            </button>
            <div className="text-lg font-bold">
              Total: ${calculateTotalPrice()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
