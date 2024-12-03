import { Order } from "../models/order.js";
import { Product } from "../models/product.js";
import { Cart } from "../models/cart.js";

// Create an order from cart
export const createOrderFromCart = async (userId, shippingAddress) => {
  const cart = await Cart.findOne({ user: userId }).populate("items.product");
  if (!cart) throw new Error("Cart not found");

  let totalPrice = 0;
  for (const item of cart.items) {
    const product = await Product.findById(item.product);
    if (!product) throw new Error(`Product ${item.product} not found`);

    if (product.quantity < item.quantity)
      throw new Error(`Not enough stock for ${product.name}`);

    product.quantity -= item.quantity;
    totalPrice += product.price * item.quantity;
    await product.save();
  }

  const newOrder = new Order({
    user: userId,
    orderItems: cart.items,
    shippingAddress,
    totalPrice,
    status: "Pending",
  });
  await newOrder.save();

  cart.items = [];
  await cart.save();

  return newOrder;
};

// Get orders for a user
export const getOrdersByUser = async (userId) => {
  return Order.find({ user: userId }).populate("orderItems.product");
};

// Update order status
export const updateOrderStatus = async (orderId, status) => {
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");

  order.status = status;
  await order.save();
  return order;
};
