import {
  createOrderFromCart,
  getOrdersByUser,
  updateOrderStatus,
} from "../services/orderService.js";

// Fungsi untuk membuat order baru
export const createNewOrder = async (req, res) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  const { orderData } = req.body;

  try {
    const order = await createOrderFromCart(
      req.user.id,
      orderData.shippingAddress
    );
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Fungsi untuk mengambil orders dari user
export const getUserOrders = async (req, res) => {
  try {
    const orders = await getOrdersByUser(req.user.id);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fungsi untuk memperbarui status order
export const updateOrder = async (req, res) => {
  const { orderId } = req.params; // Mengambil orderId dari parameter URL
  const { status } = req.body; // Mengambil status dari body

  try {
    const updatedOrder = await updateOrderStatus(orderId, status);
    res.json({ message: "Order status updated", updatedOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
