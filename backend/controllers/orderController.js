import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const { orderItems, totalPrice } = req.body;
  const user = req.user; // Authenticated user

  try {
    const order = await Order.create({
      user: user._id,
      orderItems,
      totalPrice,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  const user = req.user; // Authenticated user

  try {
    const orders = await Order.find({ user: user._id }).populate(
      "orderItems.product"
    );
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
