import mongoose from "mongoose";

// Define schema for the cart
const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Menyambungkan dengan model User
      required: true, // Pastikan setiap cart memiliki user yang valid
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product", // Menyambungkan dengan model Product
          required: true, // Pastikan setiap item memiliki produk yang valid
        },
        quantity: {
          type: Number,
          required: [true, "Product quantity is required"],
          min: [1, "Quantity must be at least 1"],
        },
      },
    ],
  },
  {
    timestamps: true, // Otomatis menambahkan createdAt dan updatedAt
  }
);

// Membuat model Cart berdasarkan schema
const Cart = mongoose.model("Cart", cartSchema);

// Ekspor model Cart agar bisa digunakan di tempat lain
export default Cart;
