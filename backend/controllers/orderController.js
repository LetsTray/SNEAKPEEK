import Order from "../models/Order.js";
import Product from "../models/Product.js"; // Pastikan Product diimpor

// Fungsi untuk membuat pesanan baru
export const createOrder = async (req, res) => {
  const { orderItems, shippingAddress } = req.body;

  try {
    let totalPrice = 0;

    // Iterasi untuk menghitung total harga dan memperbarui stok produk
    for (let i = 0; i < orderItems.length; i++) {
      const product = await Product.findById(orderItems[i].product);
      if (!product) {
        return res.status(404).json({
          message: `Product with ID ${orderItems[i].product} not found`,
        });
      }

      // Memeriksa apakah stok mencukupi
      if (product.stock < orderItems[i].quantity) {
        return res.status(400).json({
          message: `Not enough stock for product ${product.name}`,
        });
      }

      // Mengurangi stok produk
      product.stock -= orderItems[i].quantity;

      // Menyimpan perubahan stok
      await product.save();

      // Menghitung total harga
      totalPrice += product.price * orderItems[i].quantity;
    }

    // Membuat order baru
    const order = new Order({
      user: req.user._id, // pastikan req.user berisi data user yang valid
      orderItems,
      shippingAddress,
      totalPrice,
    });

    // Menyimpan order ke database
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fungsi untuk mendapatkan semua pesanan pengguna yang sedang terautentikasi
export const getUserOrders = async (req, res) => {
  try {
    // Mengambil semua pesanan berdasarkan user_id dari token
    const orders = await Order.find({ user: req.user._id });

    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
