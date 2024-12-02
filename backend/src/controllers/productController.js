import { Product } from "../models/Product.js";

// Fungsi untuk mendapatkan daftar semua produk
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Ambil semua produk
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    res.json(products); // Kirimkan daftar produk
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fungsi untuk menambah produk baru
export const createProduct = async (req, res) => {
  const { name, description, price, quantity } = req.body;

  try {
    // Cek apakah produk sudah ada
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }

    // Membuat produk baru
    const product = new Product({
      name,
      description,
      price,
      quantity,
    });

    const createdProduct = await product.save(); // Simpan produk baru ke database
    res.status(201).json(createdProduct); // Kirimkan produk yang baru dibuat
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fungsi untuk memperbarui produk
export const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const { name, description, price, quantity } = req.body;

  try {
    // Temukan produk berdasarkan ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update informasi produk
    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.quantity = quantity || product.quantity;

    const updatedProduct = await product.save(); // Simpan perubahan
    res.json(updatedProduct); // Kirimkan produk yang diperbarui
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fungsi untuk menghapus produk
export const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    // Temukan produk berdasarkan ID
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Hapus produk
    await product.remove();
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
