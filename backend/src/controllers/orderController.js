import {
  createOrder,
  getOrdersByUser,
  updateOrderStatus,
  getOrderById,
} from "../services/orderService.js";

export const createNewOrder = async (req, res) => {
  const { orderData } = req.body;

  try {
    const order = await createOrder(orderData, req.user._id);
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await getOrdersByUser(req.user._id);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    const updatedOrder = await updateOrderStatus(orderId, status);
    res.json({ message: "Order status updated", updatedOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getOrderDetails = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await getOrderById(orderId);
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
