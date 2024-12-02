import Order from "../models/Order.js";
import { Product } from "../models/Product.js";

/**
 * Create a new order
 * @param {Object} orderData - Data for creating an order
 * @param {string} userId - ID of the user making the order
 * @returns {Object} Created order
 */
export const createOrder = async (orderData, userId) => {
  const { orderItems, shippingAddress } = orderData;

  if (!orderItems?.length) throw new Error("No items in the order");

  let totalPrice = 0;

  for (const { product: productId, quantity } of orderItems) {
    const product = await Product.findById(productId);
    if (!product) throw new Error(`Product with ID ${productId} not found`);

    if (product.quantity < quantity) {
      throw new Error(`Not enough stock for product: ${product.name}`);
    }

    product.quantity -= quantity;
    await product.save();

    totalPrice += product.price * quantity;
  }

  const order = new Order({
    user: userId,
    orderItems,
    shippingAddress,
    totalPrice,
    status: "Pending",
  });

  return order.save();
};

/**
 * Get all orders for a specific user
 * @param {string} userId - User ID
 * @returns {Array} List of orders
 */
export const getOrdersByUser = async (userId) => {
  return Order.find({ user: userId }).populate("orderItems.product");
};

/**
 * Update order status
 * @param {string} orderId - Order ID
 * @param {string} status - New status
 * @returns {Object} Updated order
 */
export const updateOrderStatus = async (orderId, status) => {
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");

  order.status = status;
  return order.save();
};

/**
 * Get order by ID
 * @param {string} orderId - Order ID
 * @returns {Object} Order details
 */
export const getOrderById = async (orderId) => {
  const order = await Order.findById(orderId).populate("orderItems.product");
  if (!order) throw new Error("Order not found");

  return order;
};
