import { Order } from "../models/Order.js";
import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";

// Helper function to handle server errors
const handleError = (res, message, error = null) => {
  return res
    .status(500)
    .json({ message, error: error ? error.message : undefined });
};

// Helper function to calculate the total price of the order
const calculateTotalPrice = async (items) => {
  let totalPrice = 0;
  for (const item of items) {
    const product = await Product.findById(item.product);
    if (!product) throw new Error(`Product not found: ${item.product}`);
    if (product.quantity < item.quantity)
      throw new Error(`Insufficient stock for product: ${product.name}`);
    totalPrice += product.price * item.quantity;
  }
  return totalPrice;
};

// Helper function to reduce product stock after order
const reduceProductStock = async (items) => {
  for (const item of items) {
    const product = await Product.findById(item.product);
    product.quantity -= item.quantity;
    await product.save();
  }
};

// Create a new order
export const createOrder = async (req, res) => {
  const { shippingAddress } = req.body;

  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Your cart is empty" });
    }

    // Calculate the total price of the order
    const totalPrice = await calculateTotalPrice(cart.items);

    // Create the order
    const newOrder = new Order({
      user: req.user._id,
      orderItems: cart.items,
      totalPrice,
      shippingAddress,
      status: "Pending", // Default order status
    });

    // Save the order
    const createdOrder = await newOrder.save();

    // Reduce product stock after order is placed
    await reduceProductStock(cart.items);

    // Delete the cart after order is created
    await Cart.deleteOne({ user: req.user._id });

    res
      .status(201)
      .json({ message: "Order created successfully", order: createdOrder });
  } catch (error) {
    handleError(res, "Server error", error);
  }
};

// Get all orders for the logged-in user
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "orderItems.product"
    );

    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.json(orders);
  } catch (error) {
    handleError(res, "Server error", error);
  }
};

// Update the status of an order (admin only)
export const updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = status;
    const updatedOrder = await order.save();

    res.json({ message: "Order status updated", order: updatedOrder });
  } catch (error) {
    handleError(res, "Server error", error);
  }
};
