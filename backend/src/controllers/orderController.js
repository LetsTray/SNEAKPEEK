import {
  createOrderFromCartService,
  getUserOrdersService,
  updateOrderStatusService,
} from "../services/orderService.js";

// Controller untuk membuat order baru
export const createOrderController = async (req, res) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  const { shippingAddress } = req.body;

  try {
    const order = await createOrderFromCartService(
      req.user.id,
      shippingAddress
    );
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(400).json({ message: error.message });
  }
};

// Controller untuk mendapatkan semua orders user
export const getUserOrdersController = async (req, res) => {
  try {
    const orders = await getUserOrdersService(req.user.id);
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching user orders:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk memperbarui status order
export const updateOrderStatusController = async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const updatedOrder = await updateOrderStatusService(orderId, status);
    res.status(200).json({ message: "Order status updated", updatedOrder });
  } catch (error) {
    console.error("Error updating order status:", error.message);
    res.status(400).json({ message: error.message });
  }
};
