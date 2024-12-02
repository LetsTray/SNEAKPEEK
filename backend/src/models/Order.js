import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    shippingAddress: { type: String, required: true },
    status: { type: String, default: "Pending" },
  },
  {
    timestamps: true,
  }
);

// Export the model
const Order = mongoose.model("Order", orderSchema);

export { Order }; // Ensure you're exporting the Order model
