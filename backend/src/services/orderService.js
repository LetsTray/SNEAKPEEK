import { Order } from "../models/Order.js";
import { Product } from "../models/Product.js";

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

export const getOrdersByUser = async (userId) => {
  return Order.find({ user: userId }).populate("orderItems.product");
};

export const updateOrderStatus = async (orderId, status) => {
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");

  order.status = status;
  return order.save();
};

export const getOrderById = async (orderId) => {
  const order = await Order.findById(orderId).populate("orderItems.product");
  if (!order) throw new Error("Order not found");

  return order;
};
