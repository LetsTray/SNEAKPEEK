import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";

// Fungsi untuk mendapatkan keranjang belanja pengguna
export const getCart = async (req, res) => {
  try {
    // Temukan keranjang berdasarkan pengguna yang sedang login
    const cart = await Cart.findOne({ user: req.user._id }).populate(
      "items.product"
    );

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Kirimkan data keranjang yang sudah dilengkapi dengan data produk
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Fungsi untuk menambahkan item ke keranjang belanja
export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Cek apakah produk yang diminta ada
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Temukan keranjang yang dimiliki pengguna saat ini
    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      // Jika keranjang belum ada, buat keranjang baru
      cart = new Cart({
        user: req.user._id,
        items: [],
      });
    }

    // Cek apakah produk sudah ada dalam keranjang
    const existingItemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (existingItemIndex >= 0) {
      // Jika produk sudah ada, update jumlahnya
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Jika produk belum ada, tambahkan item baru ke keranjang
      cart.items.push({ product: productId, quantity });
    }

    // Simpan perubahan pada keranjang
    await cart.save();

    res.status(200).json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Fungsi untuk menghapus item dari keranjang
export const removeFromCart = async (req, res) => {
  const { productId } = req.body;

  try {
    // Temukan keranjang berdasarkan pengguna yang sedang login
    const cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Temukan index item yang ingin dihapus
    const itemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (itemIndex === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Hapus item dari keranjang
    cart.items.splice(itemIndex, 1);

    // Simpan perubahan pada keranjang
    await cart.save();

    res.status(200).json({ message: "Product removed from cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
