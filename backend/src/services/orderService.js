import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Cart from "../models/Cart.js";

// Service untuk membuat order dari keranjang
export const createOrderFromCartService = async (userId, shippingAddress) => {
  const cart = await Cart.findOne({ user: userId }).populate("items.product");
  if (!cart) throw new Error("Cart not found");

  let totalPrice = 0;
  for (const item of cart.items) {
    const product = item.product;
    if (!product) throw new Error("Product not found");

    if (product.quantity < item.quantity) {
      throw new Error(`Not enough stock for ${product.name}`);
    }

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

  // Kosongkan keranjang setelah order dibuat
  cart.items = [];
  await cart.save();

  return newOrder;
};

// Service untuk mendapatkan semua orders user
export const getUserOrdersService = async (userId) => {
  const orders = await Order.find({ user: userId }).populate(
    "orderItems.product"
  );
  if (!orders.length) throw new Error("No orders found for the user");
  return orders;
};

// Service untuk memperbarui status order
export const updateOrderStatusService = async (orderId, status) => {
  const order = await Order.findById(orderId);
  if (!order) throw new Error("Order not found");

  order.status = status;
  await order.save();
  return order;
};
