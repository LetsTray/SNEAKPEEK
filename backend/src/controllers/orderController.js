import { Order } from "../models/Order.js";
import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";

// Fungsi untuk membuat pesanan
export const createOrder = async (req, res) => {
  const { shippingAddress } = req.body;

  try {
    // Temukan keranjang pengguna yang sedang login
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Your cart is empty" });
    }

    // Menghitung total harga pesanan
    let totalPrice = 0;
    for (const item of cart.items) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res
          .status(404)
          .json({ message: `Product not found: ${item.product}` });
      }

      // Pastikan produk memiliki stok yang cukup
      if (product.quantity < item.quantity) {
        return res
          .status(400)
          .json({ message: `Insufficient stock for product: ${product.name}` });
      }

      totalPrice += product.price * item.quantity;
    }

    // Membuat pesanan baru
    const newOrder = new Order({
      user: req.user._id,
      orderItems: cart.items,
      totalPrice,
      shippingAddress,
      status: "Pending", // Status pesanan default
    });

    // Simpan pesanan
    const createdOrder = await newOrder.save();

    // Mengurangi stok produk yang sudah dipesan
    for (const item of cart.items) {
      const product = await Product.findById(item.product);
      product.quantity -= item.quantity;
      await product.save();
    }

    // Menghapus keranjang setelah pesanan dibuat
    await Cart.deleteOne({ user: req.user._id });

    res
      .status(201)
      .json({ message: "Order created successfully", order: createdOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fungsi untuk mendapatkan pesanan pengguna
export const getUserOrders = async (req, res) => {
  try {
    // Temukan pesanan berdasarkan pengguna yang sedang login
    const orders = await Order.find({ user: req.user._id }).populate(
      "orderItems.product"
    );

    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fungsi untuk mengupdate status pesanan (misalnya admin)
export const updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    // Temukan pesanan berdasarkan ID
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Update status pesanan
    order.status = status;
    const updatedOrder = await order.save();

    res.json({ message: "Order status updated", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
